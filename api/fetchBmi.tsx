import { ApiError, BmiResponse } from '@/constants/Types';

export async function fetchBmi(
    weight: number,
    height: number,
    gender: number
): Promise<BmiResponse | ApiError> {
    try {
        console.log('starting');

        const res = await fetch(
            `http://192.168.221.135:3337/api/v1/bmi/${weight}/${height}/${gender}`
        );

        if (!res.ok) {
            const errorData = await res.json();
            return {
                message: errorData?.message || 'Une erreur est survenue',
                status: res.status,
            };
        }

        const data: BmiResponse = await res.json();
        return data;
    } catch (err) {
        return {
            message: 'Impossible de joindre le serveur',
        };
    }
}
