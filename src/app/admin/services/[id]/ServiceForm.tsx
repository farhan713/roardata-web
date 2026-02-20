'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createService, updateService, deleteService } from './actions';
import { Loader, Save, Trash2 } from 'lucide-react';

export default function ServiceForm({
    initialData,
    isEditing
}: {
    initialData: { id?: string; name?: string; slug?: string; heroHeadline?: string; heroSubheadline?: string; bodySections?: string } | null,
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
            result = await updateService(initialData.id, formData);
        } else {
            result = await createService(formData);
        }

        if (result.success) {
            router.push('/admin/services');
        } else {
            setError(result.error);
            setIsSaving(false);
        }
    }

    async function handleDelete() {
        if (!initialData?.id) return;
        if (!confirm('Are you sure you want to delete this service?')) return;

        setIsDeleting(true);
        const result = await deleteService(initialData.id);

        if (result.success) {
            router.push('/admin/services');
        } else {
            setError(result.error);
            setIsDeleting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="p-4 bg-red-950/50 border border-red-900 rounded-lg text-red-500 text-sm">
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Service Name</label>
                    <input
                        name="name"
                        defaultValue={initialData?.name}
                        required
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 transition-colors"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">URL Slug</label>
                    <input
                        name="slug"
                        defaultValue={initialData?.slug}
                        required
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 transition-colors font-mono text-sm"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Hero Headline</label>
                <input
                    name="heroHeadline"
                    defaultValue={initialData?.heroHeadline}
                    required
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 transition-colors"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Hero Subheadline</label>
                <textarea
                    name="heroSubheadline"
                    defaultValue={initialData?.heroSubheadline}
                    required
                    rows={3}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 transition-colors resize-none"
                />
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">Body Sections (JSON Format)</label>
                <textarea
                    name="bodySections"
                    defaultValue={initialData?.bodySections || '[]'}
                    required
                    rows={10}
                    className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-brand-500 transition-colors font-mono text-sm"
                />
                <p className="text-xs text-slate-500 mt-1">Must be valid JSON string array of section objects.</p>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                {isEditing ? (
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={isDeleting || isSaving}
                        className="flex items-center gap-2 px-4 py-2.5 text-red-500 hover:bg-red-500/10 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {isDeleting ? <Loader className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        Delete Service
                    </button>
                ) : <div />}

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => router.push('/admin/services')}
                        className="px-6 py-2.5 text-slate-300 hover:text-white transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSaving || isDeleting}
                        className="flex items-center gap-2 px-6 py-2.5 bg-brand-500 hover:bg-brand-400 text-slate-950 font-semibold rounded-lg transition-colors disabled:opacity-70"
                    >
                        {isSaving ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {isEditing ? 'Save Changes' : 'Create Service'}
                    </button>
                </div>
            </div>
        </form>
    );
}
