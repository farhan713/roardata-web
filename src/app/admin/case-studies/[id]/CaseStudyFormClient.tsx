'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createCaseStudy, updateCaseStudy, deleteCaseStudy } from '../actions';
import { Loader, Save, Trash2 } from 'lucide-react';
import RichTextEditor from '@/components/RichTextEditor';
import SeoMetadataFields from '@/components/admin/SeoMetadataFields';

export default function CaseStudyForm({
    initialData,
    industries,
    cities,
    isEditing
}: {
    initialData: { id?: string; title?: string; slug?: string; industryId?: string | null; cityId?: string | null; outcomeMetrics?: string; bodySections?: string } | null,
    industries: { id: string; name: string }[],
    cities: { id: string; cityName: string }[],
    isEditing: boolean
}) {
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Helper to convert legacy JSON into HTML for the Quill editor
    const getInitialHtml = (body?: string) => {
        if (!body) return '';
        if (body.trim().startsWith('[')) {
            try {
                const parsed = JSON.parse(body);
                if (Array.isArray(parsed)) {
                    return parsed.map((block: any) => `<p>${block.content || ''}</p>`).join('');
                }
            } catch (e) {
                // Return as is if parsing fails
            }
        }
        return body;
    };

    const [bodySections, setBodySections] = useState(getInitialHtml(initialData?.bodySections));

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSaving(true);
        setError(null);

        const formData = new FormData(e.currentTarget);

        let result;
        if (isEditing && initialData?.id) {
            result = await updateCaseStudy(initialData.id, formData);
        } else {
            result = await createCaseStudy(formData);
        }

        if (result.success) {
            router.push('/admin/case-studies');
        } else {
            setError(result.error || 'An error occurred');
            setIsSaving(false);
        }
    }

    async function handleDelete() {
        if (!initialData?.id) return;
        if (!confirm('Are you sure you want to delete this case study?')) return;

        setIsDeleting(true);
        const result = await deleteCaseStudy(initialData.id);

        if (result.success) {
            router.push('/admin/case-studies');
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
                    <label className="text-sm font-medium text-black/80">Case Study Title</label>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">Link to Industry</label>
                    <select
                        name="industryId"
                        defaultValue={initialData?.industryId || ''}
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
                    >
                        <option value="">-- None --</option>
                        {industries.map(ind => (
                            <option key={ind.id} value={ind.id}>{ind.name}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-medium text-black/80">Link to City</label>
                    <select
                        name="cityId"
                        defaultValue={initialData?.cityId || ''}
                        className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors"
                    >
                        <option value="">-- None --</option>
                        {cities.map(city => (
                            <option key={city.id} value={city.id}>{city.cityName}</option>
                        ))}
                    </select>
                </div>
            </div>



            <div className="space-y-2">
                <label className="text-sm font-medium text-black/80">Outcome Metrics (JSON Array)</label>
                <textarea
                    name="outcomeMetrics"
                    defaultValue={initialData?.outcomeMetrics || '[]'}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-white border border-border rounded-lg text-black focus:outline-none focus:border-primary transition-colors font-mono text-sm"
                />
                <p className="text-xs text-black/50">Must be valid JSON array: <code>{`[{"label": "ROI", "value": "400%"}]`}</code></p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-black/80">Full Case Study Body</label>
                <input type="hidden" name="bodySections" value={bodySections} />
                <div className="border border-border rounded-lg bg-white overflow-hidden min-h-[350px]">
                    <RichTextEditor
                        value={bodySections}
                        onChange={setBodySections}
                        placeholder="Write your case study content here. Use the toolbar to add headings, bold text, lists, and colors..."
                    />
                </div>
            </div>

            <SeoMetadataFields initialData={initialData} />

            <div className="flex items-center justify-between pt-6 border-t border-border">
                {isEditing ? (
                    <button
                        type="button"
                        onClick={handleDelete}
                        disabled={isDeleting || isSaving}
                        className="flex items-center gap-2 px-4 py-2.5 text-destructive hover:bg-destructive/10 rounded-lg transition-colors disabled:opacity-50"
                    >
                        {isDeleting ? <Loader className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                        Delete Case Study
                    </button>
                ) : <div />}

                <div className="flex gap-4">
                    <button
                        type="button"
                        onClick={() => router.push('/admin/case-studies')}
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
                        {isEditing ? 'Save Changes' : 'Create Case Study'}
                    </button>
                </div>
            </div>
        </form>
    );
}
