"use client";

import React, { useState, useCallback, useRef } from "react";
import { Trash2, Upload, Copy, Check, Search, X, ImageIcon } from "lucide-react";

type MediaItem = {
  id: string;
  name: string;
  url: string;
  size: number;
  type: string;
  createdAt: Date;
};

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function MediaLibraryClient({ initialMedia }: { initialMedia: MediaItem[] }) {
  const [media, setMedia] = useState(initialMedia);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<MediaItem | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dropRef = useRef<HTMLDivElement>(null);

  const filtered = media.filter(
    (m) =>
      !search ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.type.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpload = async (files: FileList | null) => {
    if (!files?.length) return;
    setUploading(true);
    const uploaded: MediaItem[] = [];
    for (const file of Array.from(files)) {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/media", { method: "POST", body: formData });
      if (res.ok) {
        const { media: m } = await res.json();
        uploaded.push(m);
      }
    }
    setMedia((prev) => [...uploaded, ...prev]);
    setUploading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this image permanently?")) return;
    const res = await fetch(`/api/media/${id}`, { method: "DELETE" });
    if (res.ok) {
      setMedia((prev) => prev.filter((m) => m.id !== id));
      if (selected?.id === id) setSelected(null);
    }
  };

  const copyUrl = (item: MediaItem) => {
    navigator.clipboard.writeText(window.location.origin + item.url);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      handleUpload(e.dataTransfer.files);
    },
    []
  );

  return (
    <div className="flex gap-6 h-[calc(100vh-180px)]">
      {/* Main grid panel */}
      <div className="flex-1 flex flex-col min-w-0 gap-4">
        {/* Toolbar */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="relative flex-1 min-w-48">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-[#6E5A4E]/50" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search images…"
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#6E5A4E]/15 text-sm focus:outline-none focus:border-[#A8B29A] bg-[#FAF8F4]"
              style={{ color: "#3A2C1E" }}
            />
          </div>
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-[#FAF7F2] hover:bg-[#98A58B] transition-colors disabled:opacity-50"
            style={{ backgroundColor: "#A8B29A" }}
          >
            <Upload className="w-4 h-4" />
            {uploading ? "Uploading…" : "Upload Images"}
          </button>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/jpeg,image/png,image/webp,image/svg+xml"
            className="hidden"
            onChange={(e) => handleUpload(e.target.files)}
          />
          <span className="text-xs text-[#6E5A4E]">{filtered.length} image{filtered.length !== 1 ? "s" : ""}</span>
        </div>

        {/* Drop zone + grid */}
        <div
          ref={dropRef}
          className="flex-1 overflow-y-auto rounded-2xl border-2 border-dashed border-[#6E5A4E]/15 p-4 transition-colors"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => dropRef.current?.classList.add("border-[#A8B29A]")}
          onDragLeave={() => dropRef.current?.classList.remove("border-[#A8B29A]")}
        >
          {filtered.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center gap-3 text-center">
              <ImageIcon className="w-12 h-12 text-[#6E5A4E]/20" />
              <p className="text-sm text-[#6E5A4E]/60">
                {search ? "No images match your search." : "No images uploaded yet."}
              </p>
              {!search && (
                <p className="text-xs text-[#6E5A4E]/40">
                  Drag & drop images here or click Upload
                </p>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {filtered.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelected(selected?.id === item.id ? null : item)}
                  className="group relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-150"
                  style={{
                    borderColor: selected?.id === item.id ? "#A8B29A" : "transparent",
                    backgroundColor: "#FAF7F2",
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-150 flex items-end p-1.5">
                    <p className="text-white text-[9px] font-medium truncate w-full opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.name}
                    </p>
                  </div>
                  {selected?.id === item.id && (
                    <div className="absolute top-1 right-1 w-4 h-4 rounded-full bg-[#A8B29A] flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Detail Panel */}
      <div
        className="hidden lg:flex w-64 shrink-0 flex-col rounded-2xl border border-[#6E5A4E]/10 overflow-hidden"
        style={{ backgroundColor: "#FAF8F4" }}
      >
        {selected ? (
          <>
            {/* Image preview */}
            <div className="aspect-square w-full bg-[#FAF7F2] flex items-center justify-center overflow-hidden">
              <img
                src={selected.url}
                alt={selected.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            {/* Details */}
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6E5A4E]/60 mb-0.5">Filename</p>
                <p className="text-xs font-medium text-[#3A2C1E] break-all">{selected.name}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6E5A4E]/60 mb-0.5">Type</p>
                <p className="text-xs text-[#3A2C1E]">{selected.type}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6E5A4E]/60 mb-0.5">Size</p>
                <p className="text-xs text-[#3A2C1E]">{formatBytes(selected.size)}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6E5A4E]/60 mb-0.5">URL</p>
                <p className="text-[10px] font-mono text-[#6E5A4E] break-all">{selected.url}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[#6E5A4E]/60 mb-0.5">Uploaded</p>
                <p className="text-xs text-[#3A2C1E]">
                  {new Date(selected.createdAt).toLocaleDateString("en-IN", {
                    day: "numeric", month: "short", year: "numeric",
                  })}
                </p>
              </div>
            </div>
            {/* Actions */}
            <div className="p-4 border-t border-[#6E5A4E]/10 flex flex-col gap-2">
              <button
                onClick={() => copyUrl(selected)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-[#6E5A4E]/15 text-xs font-bold hover:bg-[#6E5A4E]/10 transition-colors"
                style={{ color: "#4A3728" }}
              >
                {copiedId === selected.id ? (
                  <><Check className="w-3.5 h-3.5 text-green-600" /> Copied!</>
                ) : (
                  <><Copy className="w-3.5 h-3.5" /> Copy URL</>
                )}
              </button>
              <button
                onClick={() => handleDelete(selected.id)}
                className="flex items-center justify-center gap-2 w-full py-2 rounded-xl border border-red-200 text-xs font-bold text-red-600 hover:bg-red-50 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 p-6 text-center">
            <ImageIcon className="w-10 h-10 text-[#6E5A4E]/20" />
            <p className="text-xs text-[#6E5A4E]/50">Select an image to view details</p>
          </div>
        )}
      </div>
    </div>
  );
}
