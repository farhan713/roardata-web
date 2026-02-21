'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createIndustry, updateIndustry, deleteIndustry } from '../actions';
import { Loader, Save, Trash2 } from 'lucide-react';

export default function IndustryForm({
    initialData,
    isEditing
}: {
    initialData: { id?: string; name?: string; slug?: string; overview?: string; commonProblems?: string; useCases?: string; kpis?: string; dataSources?: string; dashboardEmbedCode?: string | null } | null,
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
            result = await updateIndustry(initialData.id, formData);
        } else {
            result = await createIndustry(formData);
        }

        if (result.success) {
            router.push('/admin/industries');
        } else {
            setError(result.error || 'An error occurred');
            setIsSaving(false);
        }
    }

    async function handleDelete() {
        if (!initialData?.id) return;
        if (!confirm('Are you sure you want to delete this industry?')) return;

        setIsDeleting(true);
        const result = await deleteIndustry(initialData.id);

        if (result.success) {
            router.push('/admin/industries');
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
                    <label className="text-sm font-medium text-black/80">Industry Name</label>
                    <input
                        name="name"
                        defaultValue={initialData?.name}
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">Common Problems (JSON Array)</label>
                    <textarea
                        name="commonProblems"
                        defaultValue={initialData?.commonProblems || '[]'}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">Use Cases (JSON Array)</label>
                    <textarea
                        name="useCases"
                        defaultValue={initialData?.useCases || '[]'}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-black/80">Overview copy</label>
                <textarea
                    name="overview"
                    defaultValue={initialData?.overview}
                    required
                    rows={6}
                    className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors resize-none"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">KPIs (JSON Array)</label>
                    <textarea
                        name="kpis"
                        defaultValue={initialData?.kpis || '[]'}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">Data Sources (JSON Array)</label>
                    <textarea
                        name="dataSources"
                        defaultValue={initialData?.dataSources || '[]'}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-black/80 flex justify-between">
                    <span>Power BI Dashboard Embed Code (Raw HTML)</span>
                    <span className="text-muted-foreground text-xs font-normal">Optional. Paste &lt;iframe&gt; code here.</span>
                </label>
                <textarea
                    name="dashboardEmbedCode"
                    defaultValue={initialData?.dashboardEmbedCode || ''}
                    rows={4}
                    placeholder={`<iframe title="Report Section" width="100%" height="600" src="..." frameborder="0" allowFullScreen="true"></iframe>`}
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm h-32"
                />
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
                        Delete Industry
                    </button>
                ) : <div />}

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => router.push('/admin/industries')}
                        className="px-6 py-2.5 text-black/60 hover:text-black transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={isSaving || isDeleting}
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-70"
                    >
                        {isSaving ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        {isEditing ? 'Save Changes' : 'Create Industry'}
                    </button>
                </div>
            </div>
        </form>
    );
}
