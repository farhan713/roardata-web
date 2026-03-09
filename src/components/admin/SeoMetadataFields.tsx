export default function SeoMetadataFields({
    initialData,
    showLocalFields = false
}: {
    initialData: any;
    showLocalFields?: boolean;
}) {
    return (
        <div className="space-y-4">
            <h3 className="text-xl font-semibold text-black/90 pt-4 border-t border-border">SEO & Metadata Settings</h3>
            <p className="text-sm text-muted-foreground mb-4">
                These fields are critical for Search Engine Optimization, Social Media previews, and structured data definition.
            </p>

            <details className="group border border-border rounded-lg bg-white overflow-hidden" open>
                <summary className="flex items-center justify-between px-4 py-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors font-medium">
                    Core SEO Setup
                    <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                </summary>
                <div className="p-4 space-y-4 bg-white border-t border-border hidden group-open:block">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black/80">Meta Title</label>
                        <input name="metaTitle" defaultValue={initialData?.metaTitle} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary" placeholder="Overrides the default page title" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black/80">Meta Description</label>
                        <textarea name="metaDescription" defaultValue={initialData?.metaDescription} rows={2} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary resize-none" placeholder="Short summary for search results" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Canonical URL</label>
                            <input name="canonicalUrl" defaultValue={initialData?.canonicalUrl} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary" placeholder="e.g., https://roardata.com.au/..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Robots Meta Tag</label>
                            <select name="robotsMeta" defaultValue={initialData?.robotsMeta || "index, follow"} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary">
                                <option value="index, follow">Index, Follow (Default)</option>
                                <option value="noindex, nofollow">No Index, No Follow</option>
                                <option value="index, nofollow">Index, No Follow</option>
                                <option value="noindex, follow">No Index, Follow</option>
                            </select>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black/80">Main Image Alt Text</label>
                        <input name="mainImageAlt" defaultValue={initialData?.mainImageAlt} className="w-full px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:border-primary" placeholder="Descriptive text for the primary page image" />
                    </div>
                </div>
            </details>

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
                        <input name="ogTitle" defaultValue={initialData?.ogTitle} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Social Media Title" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black/80">OG Description</label>
                        <textarea name="ogDescription" defaultValue={initialData?.ogDescription} rows={2} className="w-full px-4 py-2 bg-white border border-border rounded-lg resize-none" placeholder="Social Media Summary" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">OG Image URL</label>
                            <input name="ogImage" defaultValue={initialData?.ogImage} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="https://..." />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-black/80">Social Image Alt Text</label>
                            <input name="socialImageAlt" defaultValue={initialData?.socialImageAlt} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Alt text for the OG/Twitter image" />
                        </div>
                    </div>
                </div>
            </details>

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
                        <input name="twitterTitle" defaultValue={initialData?.twitterTitle} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Twitter specific title" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black/80">Twitter Description</label>
                        <textarea name="twitterDescription" defaultValue={initialData?.twitterDescription} rows={2} className="w-full px-4 py-2 bg-white border border-border rounded-lg resize-none" placeholder="Twitter specific summary" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-black/80">Twitter Image URL</label>
                        <input name="twitterImage" defaultValue={initialData?.twitterImage} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="https://..." />
                    </div>
                </div>
            </details>

            <details className="group border border-border rounded-lg bg-white overflow-hidden">
                <summary className="flex items-center justify-between px-4 py-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors font-medium">
                    Advanced Structured Data (JSON-LD Schema)
                    <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                </summary>
                <div className="p-4 bg-white border-t border-border hidden group-open:block">
                    <p className="text-xs text-muted-foreground mb-4 text-orange-600 font-medium">Warning: Only paste valid JSON format here. This directly injects into the head of the document.</p>
                    <div className="space-y-2">
                        <textarea name="structuredData" defaultValue={initialData?.structuredData} rows={8} className="w-full px-4 py-2 bg-slate-50 border border-border rounded-lg font-mono text-sm focus:outline-none focus:border-primary resize-y" placeholder={'{\n  "@context": "https://schema.org",\n  "@type": "Article",\n  "headline": "Example"\n}'} />
                    </div>
                </div>
            </details>

            {showLocalFields && (
                <details className="group border border-border rounded-lg bg-white overflow-hidden" open>
                    <summary className="flex items-center justify-between px-4 py-3 bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors font-medium">
                        Local Business Details (NAP)
                        <span className="transition group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div className="p-4 space-y-4 bg-white border-t border-border hidden group-open:block">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black/80">Local Business Name</label>
                                <input name="localBusinessName" defaultValue={initialData?.localBusinessName} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="e.g., Roar Data Brisbane" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black/80">Local Phone</label>
                                <input name="localPhone" defaultValue={initialData?.localPhone} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Phone Number" />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label className="text-sm font-medium text-black/80">Local Address</label>
                                <input name="localAddress" defaultValue={initialData?.localAddress} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Full street address including postcode" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-black/80">Local Email</label>
                                <input name="localEmail" defaultValue={initialData?.localEmail} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="Location specific email" />
                            </div>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-black/80">Latitude</label>
                                    <input name="latitude" type="number" step="any" defaultValue={initialData?.latitude} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="-27.4705" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-black/80">Longitude</label>
                                    <input name="longitude" type="number" step="any" defaultValue={initialData?.longitude} className="w-full px-4 py-2 bg-white border border-border rounded-lg" placeholder="153.0260" />
                                </div>
                            </div>
                        </div>
                    </div>
                </details>
            )}
        </div>
    );
}
