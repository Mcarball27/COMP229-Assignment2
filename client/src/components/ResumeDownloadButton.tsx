// -----------------------------------------------------------------------------
// ResumeDownloadButton.tsx — reusable button for downloading the résumé PDF.
// Author: Maria Martina Carballo Diaz
// -----------------------------------------------------------------------------

type ResumeDownloadButtonProps = {
  label?: string;
  fileName?: string;
  className?: string;
};

export default function ResumeDownloadButton({
  label = 'Download Résumé (PDF)',
  fileName = 'resume.pdf',
  className
}: ResumeDownloadButtonProps) {
  // Build the correct file path for local and deployed versions of the site.
  const href = `${import.meta.env.BASE_URL}${fileName}`;

  // Combine the default button style with any optional extra classes.
  const classes = ['btn', className]
    .filter(Boolean)
    .join(' ');

  return (
    <a
      className={classes}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      download
    >
      {label}
    </a>
  );
}