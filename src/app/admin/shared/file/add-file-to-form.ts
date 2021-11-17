export function AddFileToForm(formData: FormData, name: string, file: File) {
    if (file) {
        formData.append(name, file);
    } else if (typeof file !== 'undefined') {
        formData.append(name, new Blob());
    }
}