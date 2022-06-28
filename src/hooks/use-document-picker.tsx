import * as DocumentPicker from "expo-document-picker";

import React from "react";

export default function useDocumentPicker({ options = {} }) {
    const [result, setResult] = React.useState<any>(null);
    const [error, setError] = React.useState<any>(null);
    const [loading, setLoading] = React.useState<any>(false);
    const [uri, setUri] = React.useState<string | null>(null);

    const pickDocument = async () => {
        try {
            setLoading(true);
            const res = await DocumentPicker.getDocumentAsync({ ...options });
            setResult(res);
            setUri(res.uri);
            setLoading(false);
        } catch (e) {
            setError(e);
            setLoading(false);
        }
    };

    React.useEffect(() => {
        if (result) {
            if (result.error) {
                setError(result.error);
            }
            if (result.cancelled) {
                setError(null);
            }
        }
    }, [result]);

    return { pickDocument, result, uri, error, loading };
}
