import { Meta } from '@angular/platform-browser';

export function replaceMetaTagIfNotEmpty(meta: Meta, key: string, value: string) {
    if (key && value) {
        replaceMetaTag(meta, key, value);
    }
}

export function replaceMetaTag(meta: Meta, name: string, content: string) {
    var tag = getMetaTagByName(meta, name);
    if (tag) {
        tag.content = content;
    } else {
        meta.addTag({ name, content });
    }
}

export function getMetaTagByName(meta, tagName: string) {
    return meta.getTag(`name=${tagName}`);
}