import { useAuth } from "@/_core/hooks/useAuth";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { trpc } from "@/lib/trpc";
import {
  Copy,
  Download,
  Eye,
  File,
  FileImage,
  FileType,
  FileText,
  FolderOpen,
  MoreVertical,
  Pencil,
  Search,
  Trash2,
  Upload,
  X,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { toast } from "sonner";

// ─── Helpers ─────────────────────────────────────────────────────────────────

const CATEGORIES = ["general", "documents", "images", "contracts", "reports", "other"] as const;
type Category = (typeof CATEGORIES)[number];

function formatBytes(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

function getFileIcon(mimeType: string) {
  if (mimeType.startsWith("image/")) return FileImage;
  if (mimeType === "application/pdf") return FileType;
  if (mimeType.startsWith("text/")) return FileText;
  return File;
}

function getCategoryColor(category: string | null): string {
  const map: Record<string, string> = {
    documents: "bg-blue-100 text-blue-700",
    images: "bg-purple-100 text-purple-700",
    contracts: "bg-amber-100 text-amber-700",
    reports: "bg-green-100 text-green-700",
    other: "bg-gray-100 text-gray-700",
    general: "bg-slate-100 text-slate-700",
  };
  return map[category ?? "general"] ?? map.general;
}

// ─── Upload Zone ──────────────────────────────────────────────────────────────

function UploadZone({
  onUploadComplete,
}: {
  onUploadComplete: () => void;
}) {
  const [dragging, setDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [label, setLabel] = useState("");
  const [category, setCategory] = useState<Category>("general");
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    setSelectedFiles(Array.from(files));
  };

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  }, []);

  const uploadAll = async () => {
    if (selectedFiles.length === 0) return;
    setUploading(true);
    let successCount = 0;
    for (const file of selectedFiles) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("label", label);
      formData.append("category", category);
      try {
        const res = await fetch("/api/upload", {
          method: "POST",
          body: formData,
          credentials: "include",
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: "Upload failed" }));
          toast.error(`Failed to upload ${file.name}: ${err.error}`);
        } else {
          successCount++;
        }
      } catch {
        toast.error(`Network error uploading ${file.name}`);
      }
    }
    setUploading(false);
    if (successCount > 0) {
      toast.success(`${successCount} file${successCount > 1 ? "s" : ""} uploaded successfully`);
      setSelectedFiles([]);
      setLabel("");
      onUploadComplete();
    }
  };

  return (
    <Card className="border-2 border-dashed border-[#C9A84C]/40 bg-[#0B1E33]/5">
      <CardHeader>
        <CardTitle className="text-[#0B1E33] flex items-center gap-2">
          <Upload className="w-5 h-5 text-[#C9A84C]" />
          Upload Files
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Drop zone */}
        <div
          className={`relative rounded-lg border-2 border-dashed transition-colors cursor-pointer p-8 text-center ${
            dragging
              ? "border-[#C9A84C] bg-[#C9A84C]/10"
              : "border-slate-300 hover:border-[#C9A84C]/60 hover:bg-slate-50"
          }`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          onClick={() => inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => handleFiles(e.target.files)}
          />
          <FolderOpen className="w-10 h-10 text-slate-400 mx-auto mb-3" />
          <p className="text-slate-600 font-medium">
            {selectedFiles.length > 0
              ? `${selectedFiles.length} file${selectedFiles.length > 1 ? "s" : ""} selected`
              : "Drop files here or click to browse"}
          </p>
          <p className="text-slate-400 text-sm mt-1">Max 50 MB per file</p>
        </div>

        {/* Selected file list */}
        {selectedFiles.length > 0 && (
          <div className="space-y-2">
            {selectedFiles.map((f, i) => (
              <div key={i} className="flex items-center justify-between bg-slate-50 rounded-md px-3 py-2 text-sm">
                <span className="text-slate-700 truncate max-w-[60%]">{f.name}</span>
                <span className="text-slate-400">{formatBytes(f.size)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Metadata */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1">
            <Label className="text-slate-600 text-xs font-medium">Label (optional)</Label>
            <Input
              placeholder="e.g. Q1 2025 Report"
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              className="h-9"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-slate-600 text-xs font-medium">Category</Label>
            <Select value={category} onValueChange={(v) => setCategory(v as Category)}>
              <SelectTrigger className="h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c} className="capitalize">{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={uploadAll}
          disabled={selectedFiles.length === 0 || uploading}
          className="w-full bg-[#C9A84C] hover:bg-[#b8943e] text-white font-semibold"
        >
          {uploading ? "Uploading…" : `Upload ${selectedFiles.length > 0 ? `${selectedFiles.length} file${selectedFiles.length > 1 ? "s" : ""}` : "Files"}`}
        </Button>
      </CardContent>
    </Card>
  );
}

// ─── File Card ────────────────────────────────────────────────────────────────

type FileRecord = {
  id: number;
  filename: string;
  mimeType: string;
  size: number;
  storageKey: string;
  url: string;
  label: string | null;
  category: string | null;
  uploadedBy: number;
  createdAt: Date;
};

function FileCard({
  file,
  onDelete,
  onEdit,
  onPreview,
}: {
  file: FileRecord;
  onDelete: (id: number) => void;
  onEdit: (file: FileRecord) => void;
  onPreview: (file: FileRecord) => void;
}) {
  const Icon = getFileIcon(file.mimeType);
  const isImage = file.mimeType.startsWith("image/");

  return (
    <Card className="group hover:shadow-md transition-shadow duration-200 overflow-hidden">
      {/* Thumbnail / icon area */}
      <div
        className="relative h-36 bg-slate-100 flex items-center justify-center cursor-pointer overflow-hidden"
        onClick={() => onPreview(file)}
      >
        {isImage ? (
          <img
            src={file.url}
            alt={file.filename}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <Icon className="w-12 h-12 text-slate-400" />
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
          <Eye className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      <CardContent className="p-3 space-y-2">
        {/* Filename */}
        <p className="text-sm font-medium text-[#0B1E33] truncate" title={file.filename}>
          {file.label || file.filename}
        </p>
        {file.label && (
          <p className="text-xs text-slate-400 truncate">{file.filename}</p>
        )}

        {/* Meta row */}
        <div className="flex items-center justify-between gap-2">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${getCategoryColor(file.category)}`}>
            {file.category ?? "general"}
          </span>
          <span className="text-xs text-slate-400">{formatBytes(file.size)}</span>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-xs text-slate-400">
            {new Date(file.createdAt).toLocaleDateString()}
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <MoreVertical className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onPreview(file)}>
                <Eye className="w-4 h-4 mr-2" /> Preview
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => {
                navigator.clipboard.writeText(window.location.origin + file.url);
                toast.success("URL copied to clipboard");
              }}>
                <Copy className="w-4 h-4 mr-2" /> Copy URL
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={file.url} download={file.filename}>
                  <Download className="w-4 h-4 mr-2" /> Download
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => onEdit(file)}>
                <Pencil className="w-4 h-4 mr-2" /> Edit Label
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-600 focus:text-red-600"
                onClick={() => onDelete(file.id)}
              >
                <Trash2 className="w-4 h-4 mr-2" /> Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Edit Dialog ──────────────────────────────────────────────────────────────

function EditDialog({
  file,
  open,
  onClose,
  onSaved,
}: {
  file: FileRecord | null;
  open: boolean;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [label, setLabel] = useState(file?.label ?? "");
  const [category, setCategory] = useState<Category>((file?.category as Category) ?? "general");
  const utils = trpc.useUtils();

  const updateMutation = trpc.files.update.useMutation({
    onSuccess: () => {
      toast.success("File updated");
      utils.files.list.invalidate();
      onSaved();
      onClose();
    },
    onError: (e) => toast.error(e.message),
  });

  if (!file) return null;

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Edit File Details</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 pt-2">
          <div className="space-y-1">
            <Label>Label</Label>
            <Input
              value={label}
              onChange={(e) => setLabel(e.target.value)}
              placeholder="Human-readable label"
            />
          </div>
          <div className="space-y-1">
            <Label>Category</Label>
            <Select value={category} onValueChange={(v) => setCategory(v as Category)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((c) => (
                  <SelectItem key={c} value={c} className="capitalize">{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 justify-end">
            <Button variant="outline" onClick={onClose}>Cancel</Button>
            <Button
              className="bg-[#C9A84C] hover:bg-[#b8943e] text-white"
              onClick={() => updateMutation.mutate({ id: file.id, label, category })}
              disabled={updateMutation.isPending}
            >
              Save
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Preview Dialog ───────────────────────────────────────────────────────────

function PreviewDialog({
  file,
  open,
  onClose,
}: {
  file: FileRecord | null;
  open: boolean;
  onClose: () => void;
}) {
  if (!file) return null;
  const isImage = file.mimeType.startsWith("image/");
  const isPdf = file.mimeType === "application/pdf";

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 pr-8">
            <span className="truncate">{file.label || file.filename}</span>
            <Badge variant="outline" className="text-xs flex-shrink-0">{formatBytes(file.size)}</Badge>
          </DialogTitle>
        </DialogHeader>
        <div className="mt-2">
          {isImage && (
            <img src={file.url} alt={file.filename} className="w-full rounded-lg object-contain max-h-[60vh]" />
          )}
          {isPdf && (
            <iframe src={file.url} className="w-full h-[60vh] rounded-lg border" title={file.filename} />
          )}
          {!isImage && !isPdf && (
            <div className="flex flex-col items-center justify-center py-12 text-slate-500">
              <File className="w-16 h-16 mb-4 text-slate-300" />
              <p className="font-medium">{file.filename}</p>
              <p className="text-sm text-slate-400 mt-1">{file.mimeType}</p>
            </div>
          )}
          <div className="flex gap-2 mt-4 justify-end">
            <Button variant="outline" size="sm" onClick={() => {
              navigator.clipboard.writeText(window.location.origin + file.url);
              toast.success("URL copied");
            }}>
              <Copy className="w-4 h-4 mr-1" /> Copy URL
            </Button>
            <Button asChild size="sm" className="bg-[#C9A84C] hover:bg-[#b8943e] text-white">
              <a href={file.url} download={file.filename}>
                <Download className="w-4 h-4 mr-1" /> Download
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function FileManager() {
  const { user, loading } = useAuth();
  const [search, setSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [previewFile, setPreviewFile] = useState<FileRecord | null>(null);
  const [editFile, setEditFile] = useState<FileRecord | null>(null);
  const [showUpload, setShowUpload] = useState(false);

  const { data: files, isLoading, refetch } = trpc.files.list.useQuery(undefined, {
    enabled: !!user && user.role === "admin",
  });

  const deleteMutation = trpc.files.delete.useMutation({
    onSuccess: (data) => {
      toast.success("File deleted");
      refetch();
    },
    onError: (e) => toast.error(e.message),
  });

  const handleDelete = (id: number) => {
    if (!confirm("Delete this file? This cannot be undone.")) return;
    deleteMutation.mutate({ id });
  };

  // Filter files
  const filtered = (files ?? []).filter((f) => {
    const matchSearch =
      !search ||
      f.filename.toLowerCase().includes(search.toLowerCase()) ||
      (f.label ?? "").toLowerCase().includes(search.toLowerCase());
    const matchCategory = filterCategory === "all" || f.category === filterCategory;
    return matchSearch && matchCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-500">Loading…</div>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <Card className="max-w-sm w-full mx-4">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-14 h-14 bg-[#0B1E33] rounded-full flex items-center justify-center mx-auto mb-4">
              <FolderOpen className="w-7 h-7 text-[#C9A84C]" />
            </div>
            <h2 className="text-xl font-bold text-[#0B1E33] mb-2">Admin Access Required</h2>
            <p className="text-slate-500 text-sm">
              The File Manager is only accessible to administrators. Please sign in with an admin account.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-[#0B1E33] text-white px-6 py-5 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              File Manager
            </h1>
            <p className="text-white/60 text-sm mt-0.5">TSB Accounting Solutions — Admin</p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
              onClick={() => window.history.back()}
            >
              <X className="w-4 h-4 mr-1" /> Exit
            </Button>
            <Button
              size="sm"
              className="bg-[#C9A84C] hover:bg-[#b8943e] text-white font-semibold"
              onClick={() => setShowUpload(!showUpload)}
            >
              <Upload className="w-4 h-4 mr-1" />
              {showUpload ? "Hide Upload" : "Upload Files"}
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-6">
        {/* Upload zone (collapsible) */}
        {showUpload && (
          <UploadZone onUploadComplete={() => { refetch(); setShowUpload(false); }} />
        )}

        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Files", value: files?.length ?? 0 },
            { label: "Images", value: (files ?? []).filter(f => f.mimeType.startsWith("image/")).length },
            { label: "Documents", value: (files ?? []).filter(f => f.category === "documents" || f.mimeType === "application/pdf").length },
            { label: "Total Size", value: formatBytes((files ?? []).reduce((acc, f) => acc + f.size, 0)) },
          ].map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-4 pb-4">
                <p className="text-2xl font-bold text-[#0B1E33]">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Search + filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search files…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full sm:w-44">
              <SelectValue placeholder="All categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {CATEGORIES.map((c) => (
                <SelectItem key={c} value={c} className="capitalize">{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* File grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton key={i} className="h-52 rounded-lg" />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-slate-400">
            <FolderOpen className="w-16 h-16 mx-auto mb-4 text-slate-300" />
            <p className="font-medium text-slate-500">
              {search || filterCategory !== "all" ? "No files match your filter" : "No files uploaded yet"}
            </p>
            {!showUpload && (
              <Button
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => setShowUpload(true)}
              >
                <Upload className="w-4 h-4 mr-1" /> Upload your first file
              </Button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filtered.map((file) => (
              <FileCard
                key={file.id}
                file={file}
                onDelete={handleDelete}
                onEdit={(f) => setEditFile(f)}
                onPreview={(f) => setPreviewFile(f)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Dialogs */}
      <PreviewDialog
        file={previewFile}
        open={!!previewFile}
        onClose={() => setPreviewFile(null)}
      />
      <EditDialog
        file={editFile}
        open={!!editFile}
        onClose={() => setEditFile(null)}
        onSaved={refetch}
      />
    </div>
  );
}
