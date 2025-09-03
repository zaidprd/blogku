// components/post-body.tsx (Setelah direvisi)
export default function PostBody({ content }) {
  return (
    // Hapus kelas pembatas lebar seperti max-w-* atau mx-auto
    <div>
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}