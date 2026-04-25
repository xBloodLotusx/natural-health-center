import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label?: string;
  className?: string;
  aspect?: string;
}

export const ImagePlaceholder = ({
  label = "Image",
  className = "",
  aspect = "aspect-[4/3]",
}: ImagePlaceholderProps) => {
  return (
    <div className={`image-placeholder ${aspect} w-full rounded-2xl shadow-soft ${className}`}>
      <div className="flex flex-col items-center gap-2 text-center px-4">
        <ImageIcon className="h-8 w-8 opacity-40" strokeWidth={1.25} />
        <span className="text-xs uppercase tracking-[0.2em] opacity-60 font-sans">
          {label}
        </span>
      </div>
    </div>
  );
};