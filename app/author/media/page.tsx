import MediaLibraryClient from "@/components/author/MediaLibraryClient";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function MediaPage() {
  let media: Array<{ id: string; name: string; url: string; size: number; type: string; createdAt: Date }> = [];
  try {
    media = await prisma.mediaItem.findMany({
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.warn("Prerender/build warning: Failed to fetch media items", err);
  }

  return (
    <div className="p-6 lg:p-8 space-y-6" style={{ color: "#3A2C1E" }}>
      <div>
        <h1 className="text-3xl font-bold" style={{ fontFamily: "var(--font-cormorant), serif" }}>
          Media Library
        </h1>
        <p className="text-sm text-[#6E5A4E] mt-0.5">Manage uploaded images and files</p>
      </div>
      <MediaLibraryClient initialMedia={media} />
    </div>
  );
}
