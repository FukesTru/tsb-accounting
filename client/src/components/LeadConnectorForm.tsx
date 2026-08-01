/**
 * TSB Accounting Solutions — LeadConnector (GoHighLevel) embedded form
 *
 * Renders the hosted form in an iframe and loads LeadConnector's embed script,
 * which listens for postMessage events from the iframe and resizes it to fit
 * its content. The script is injected once per page load and reused across
 * client-side navigations, so the iframe starts at `height` and grows/shrinks
 * from there.
 */
import { useEffect } from "react";

const EMBED_SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

interface LeadConnectorFormProps {
  /** Form ID from the LeadConnector embed snippet. */
  formId: string;
  /** Form name shown in LeadConnector; used for the iframe title. */
  formName: string;
  /** Initial iframe height in px, before the embed script resizes it. */
  height?: number;
  className?: string;
}

export default function LeadConnectorForm({
  formId,
  formName,
  height = 542,
  className = "",
}: LeadConnectorFormProps) {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
    // Left in place on unmount: the script installs a global message listener
    // that later mounts of this component rely on.
  }, []);

  return (
    <iframe
      src={`https://api.leadconnectorhq.com/widget/form/${formId}`}
      style={{ width: "100%", height: `${height}px`, border: "none", borderRadius: "10px" }}
      id={`inline-${formId}`}
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name={formName}
      data-height={height}
      data-layout-iframe-id={`inline-${formId}`}
      data-form-id={formId}
      title={formName}
      className={className}
    />
  );
}
