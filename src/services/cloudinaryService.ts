// Cloudinary Image Upload Service for XB Cloud Tech
// Direct signed uploads to Cloudinary CDN for instant cloud image hosting.

export interface CloudinaryUploadResponse {
  secure_url: string
  public_id: string
  width?: number
  height?: number
  format?: string
  bytes?: number
  created_at?: string
}

export const CLOUDINARY_CONFIG = {
  cloudName: "hdtlfkxg",
  apiKey: "954176382154398",
  apiSecret: "hd6jtQ6etQW_V7Et1biLaRVr69g",
  defaultFolder: "xb_cloud_tech/products",
}

async function generateSha1(str: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  const cryptoObj =
    typeof window !== "undefined"
      ? window.crypto
      : typeof globalThis !== "undefined"
        ? (globalThis as any).crypto
        : undefined

  if (!cryptoObj?.subtle) {
    throw new Error("Web Cryptography API (crypto.subtle) is not available.")
  }

  const hashBuffer = await cryptoObj.subtle.digest("SHA-1", data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("")
}

/**
 * Upload an image File, Blob, or base64 Data URL directly to Cloudinary.
 * Returns the CDN secure URL (https://res.cloudinary.com/...)
 */
export async function uploadToCloudinary(
  file: File | Blob | string,
  folder = CLOUDINARY_CONFIG.defaultFolder,
): Promise<CloudinaryUploadResponse> {
  const timestamp = Math.floor(Date.now() / 1000).toString()

  // Generate SHA-1 signature according to Cloudinary spec:
  // Sort parameters alphabetically: folder, timestamp + apiSecret
  const stringToSign = `folder=${folder}&timestamp=${timestamp}${CLOUDINARY_CONFIG.apiSecret}`
  const signature = await generateSha1(stringToSign)

  const formData = new FormData()
  formData.append("file", file)
  formData.append("api_key", CLOUDINARY_CONFIG.apiKey)
  formData.append("timestamp", timestamp)
  formData.append("folder", folder)
  formData.append("signature", signature)

  const endpoint = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CONFIG.cloudName}/image/upload`

  const response = await fetch(endpoint, {
    method: "POST",
    body: formData,
  })

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({}))
    throw new Error(
      errorBody.error?.message ||
        `Cloudinary upload failed with status ${response.status}`,
    )
  }

  const data = await response.json()
  return {
    secure_url: data.secure_url,
    public_id: data.public_id,
    width: data.width,
    height: data.height,
    format: data.format,
    bytes: data.bytes,
    created_at: data.created_at,
  }
}
