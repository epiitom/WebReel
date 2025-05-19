import { IKVideo } from "imagekitio-next";
import Link from "next/link";
import { IVideo } from "@/models/Video";

export default function VideoComponent({ video }: { video: IVideo }) {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl rounded-2xl transition-all duration-300 border border-base-200">
      <figure className="relative p-4 pb-0">
        <Link href={`/videos/${video._id}`} className="relative group w-full block">
          <div
            className="overflow-hidden rounded-xl relative w-full ring-1 ring-base-200"
            style={{ aspectRatio: "9/16" }}
          >
            <IKVideo
              path={video.videoUrl}
              transformation={[{ height: "1920", width: "1080" }]}
              controls={video.controls}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </Link>
      </figure>

      <div className="card-body px-4 pt-3 pb-4 space-y-1.5">
        <Link
          href={`/videos/${video._id}`}
          className="hover:opacity-90 transition-opacity block"
        >
          <h2 className="card-title text-base font-semibold text-base-content leading-tight">
            {video.title}
          </h2>
        </Link>

        <p className="text-sm text-base-content/70 line-clamp-2 leading-snug">
          {video.description}
        </p>
      </div>
    </div>
  );
}
