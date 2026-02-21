'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createInsight, updateInsight, deleteInsight } from '../actions';
import { Loader, Save, Trash2 } from 'lucide-react';

export default function InsightForm({
    initialData,
    isEditing
}: {
    initialData: { id?: string; title?: string; slug?: string; summary?: string; body?: string; metaTitle?: string; metaDescription?: string } | null,
    isEditing: boolean
}) {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSaving(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        let result;
        if (isEditing && initialData?.id) {
            result = await updateInsight(initialData.id, formData);
        } else {
            result = await createInsight(formData);
        }

        if (result.success) {
            router.push('/admin/insights');
        } else {
            setError(result.error || 'An error occurred');
            setIsSaving(false);
        }
    }

    async function handleDelete() {
        if (!initialData?.id) return;
        if (!confirm('Are you sure you want to delete this insight?')) return;

        setIsDeleting(true);
        const result = await deleteInsight(initialData.id);

        if (result.success) {
            router.push('/admin/insights');
        } else {
            setError(result.error || 'An error occurred');
            setIsDeleting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">Article Title</label>
                    <input
                        name="title"
                        defaultValue={initialData?.title}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">URL Slug</label>
                    <input
                        name="slug"
                        defaultValue={initialData?.slug}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-black/80">Summary / Teaser</label>
                <textarea
                    name="summary"
                    defaultValue={initialData?.summary}
                    required
                    rows={3}
                    className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors resize-none"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-black/80">Article Body (JSON Sections)</label>
                <textarea
                    name="body"
                    defaultValue={initialData?.body || '[]'}
                    required
                    rows={12}
                    className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                />
                <p className="text-xs text-black/50">Must be valid JSON array of objects: <code>{`[{"type": "p", "content": "..."}]`}</code></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-border">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/60">SEO Meta Title</label>
                    <input
                        name="metaTitle"
                        defaultValue={initialData?.metaTitle}
                        className="w-full px-4 py-2 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/60">SEO Meta Description</label>
                    <input
                        name="metaDescription"
                        defaultValue={initialData?.metaDescription}
                        className="w-full px-4 py-2 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-border">
                {isEditing ? (
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={isDeleting || isSaving}
                        className="flex items-center gap-2 px-4 py-2.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {isDeleting ? <Loader className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        Delete Insight
                    </button>
                ) : <div />}

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => router.push('/admin/insights')}
                        className="px-6 py-2.5 text-black/80 hover:text-white transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSaving || isDeleting}
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-70"
                    >
                        {isSaving ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {isEditing ? 'Save Changes' : 'Publish Insight'}
                    </button>
                </div>
            </div>
        </form>
    );
}
