import { IVideo } from "@/models/Video";

export type VideoFormData = Omit<IVideo, "_id">;

type FetchOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: unknown;
  headers?: Record<string, string>;
};

class ApiClient {
  private async fetch<T>(
    endpoint: string,
    options: FetchOptions = {}
  ): Promise<T> {
    const { method = "GET", body, headers = {} } = options;

    const defaultHeaders = {
      "Content-Type": "application/json",
      ...headers,
    };

    const response = await fetch(`/api${endpoint}`, {
      method,
      headers: defaultHeaders,
      body: body ? JSON.stringify(body) : undefined,
      credentials: "include",
    });

    if (!response.ok) {
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        throw new Error(errorData.error || "An error occurred");
      } else {
        throw new Error(await response.text());
      }
    }

    return response.json();
  }

  async getVideos() {
    return this.fetch<IVideo[]>("/videos");
  }

  async getVideo(id: string) {
    return this.fetch<IVideo>(`/videos/${id}`);
  }

  async createVideo(videoData: VideoFormData) {
    return this.fetch<IVideo>("/videos", {
      method: "POST",
      body: videoData,
    });
  }
}

export const apiClient = new ApiClient(); 