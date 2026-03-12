'use client';

import { useState } from 'react';
import { updatePageSeo } from './actions';
import { Save, Loader, Check } from 'lucide-react';

const PAGE_TABS = [
    { key: 'home', label: 'Homepage', path: '/' },
    { key: 'case-studies', label: 'Case Studies', path: '/case-studies' },
    { key: 'industries', label: 'Industries', path: '/industries' },
    { key: 'insights', label: 'Insights', path: '/insights' },
];

export default function SiteSettingsClient({ initialData }: { initialData: Record<string, any> }) {
    const [activeTab, setActiveTab] = useState('home');
    const [saving, setSaving] = useState<string | null>(null);
    const [saved, setSaved] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setSaving(activeTab);
        setError(null);
        setSaved(null);

        const formData = new FormData(e.currentTarget);
        const result = await updatePageSeo(activeTab, formData);

        if (result.success) {
            setSaved(activeTab);
            setTimeout(() => setSaved(null), 3000);
        } else {
            setError(result.error || 'An error occurred');
        }
        setSaving(null);
    }

    const currentData = initialData[activeTab] || {};
    const currentTab = PAGE_TABS.find(t => t.key === activeTab)!;

    return (
        <div>
            {/* Tabs */}
            <div className="flex gap-1 mb-8 border-b border-border">
                {PAGE_TABS.map(tab => (
                    <button
                        key={tab.key}
                        type="button"
                        onClick={() => { setActiveTab(tab.key); setError(null); setSaved(null); }}
                        className={`px-4 py-2.5 text-sm font-medium rounded-t-lg transition-colors ${
                            activeTab === tab.key
                                ? 'bg-primary/10 text-primary border-b-2 border-primary'
                                : 'text-black/60 hover:text-black hover:bg-black/5'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {error && (
                <div className="p-4 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm mb-6">
                    {error}
                </div>
            )}

            {saved === activeTab && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm mb-6 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    SEO settings for &ldquo;{currentTab.label}&rdquo; saved successfully.
                </div>
            )}

            <form onSubmit={handleSubmit} key={activeTab} className="space-y-6">
                <div className="text-xs text-black/50 mb-4">
                    Page: <span className="font-mono bg-black/5 px-2 py-0.5 rounded">{currentTab.path}</span>
                </div>

                {/* Core SEO */}
                <details className="group border border-border rounded-lg bg-white overflow-hidden" open>
                    <summary className="flex items-center justify-between px-4 py-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors font-medium">
                        Core SEO
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div className="p-4 space-y-4 bg-white border-t border-border hidden group-open:block">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Meta Title</label>
                            <input name="metaTitle" defaultValue={currentData?.metaTitle || ''} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary" placeholder="Page title for search engines" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Meta Description</label>
                            <textarea name="metaDescription" defaultValue={currentData?.metaDescription || ''} rows={2} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary resize-none" placeholder="Short summary for search results" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black/80">Canonical URL</label>
                                <input name="canonicalUrl" defaultValue={currentData?.canonicalUrl || ''} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary" placeholder="e.g., https://roardata.com.au/..." />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black/80">Robots Meta Tag</label>
                                <select name="robotsMeta" defaultValue={currentData?.robotsMeta || 'index, follow'} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary">
                                    <option value="index, follow">Index, Follow (Default)</option>
                                    <option value="noindex, nofollow">No Index, No Follow</option>
                                    <option value="index, nofollow">Index, No Follow</option>
                                    <option value="noindex, follow">No Index, Follow</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </details>

                {/* Open Graph */}
                <details className="group border border-border rounded-lg bg-white overflow-hidden">
                    <summary className="flex items-center justify-between px-4 py-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors font-medium">
                        Open Graph (Facebook/LinkedIn)
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div className="p-4 space-y-4 bg-white border-t border-border hidden group-open:block">
                        <p className="text-xs text-muted-foreground mb-4">Values will default to the Core SEO settings if left blank.</p>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">OG Title</label>
                            <input name="ogTitle" defaultValue={currentData?.ogTitle || ''} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Social Media Title" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">OG Description</label>
                            <textarea name="ogDescription" defaultValue={currentData?.ogDescription || ''} rows={2} className="w-full px-4 py-2 bg-white border border-border rounded-lg resize-none" placeholder="Social Media Summary" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">OG Image URL</label>
                            <input name="ogImage" defaultValue={currentData?.ogImage || ''} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="https://..." />
                        </div>
                    </div>
                </details>

                {/* Twitter */}
                <details className="group border border-border rounded-lg bg-white overflow-hidden">
                    <summary className="flex items-center justify-between px-4 py-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors font-medium">
                        Twitter Card Settings
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div className="p-4 space-y-4 bg-white border-t border-border hidden group-open:block">
                        <p className="text-xs text-muted-foreground mb-4">Values will default to Open Graph settings if left blank.</p>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Twitter Title</label>
                            <input name="twitterTitle" defaultValue={currentData?.twitterTitle || ''} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Twitter specific title" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Twitter Description</label>
                            <textarea name="twitterDescription" defaultValue={currentData?.twitterDescription || ''} rows={2} className="w-full px-4 py-2 bg-white border border-border rounded-lg resize-none" placeholder="Twitter specific summary" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Twitter Image URL</label>
                            <input name="twitterImage" defaultValue={currentData?.twitterImage || ''} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="https://..." />
                        </div>
                    </div>
                </details>

                {/* Save Button */}
                <div className="flex justify-end pt-4 border-t border-border">
                    <button
                        type="submit"
                        disabled={saving !== null}
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors disabled:opacity-70"
                    >
                        {saving === activeTab ? <Loader className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                        Save {currentTab.label} SEO
                    </button>
                </div>
            </form>
        </div>
    );
}
