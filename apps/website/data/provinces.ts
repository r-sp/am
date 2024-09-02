export interface Province {
    id: number;
    iso: string;
    name: string;
    description?: string;
    timezone: 'UTC+7' | 'UTC+8' | 'UTC+9';
}

export const provinces: Province[] = [
    {
        id: 11,
        iso: 'ID-AC',
        name: 'Aceh',
        timezone: 'UTC+7'
    },
    {
        id: 51,
        iso: 'ID-BA',
        name: 'Bali',
        timezone: 'UTC+8'
    },
    {
        id: 19,
        iso: 'ID-BB',
        name: 'Bangka Belitung Islands',
        description: 'Kepulauan Bangka Belitung',
        timezone: 'UTC+7'
    },
    {
        id: 36,
        iso: 'ID-BT',
        name: 'Banten',
        timezone: 'UTC+7'
    },
    {
        id: 17,
        iso: 'ID-BE',
        name: 'Bengkulu',
        timezone: 'UTC+7'
    },
    {
        id: 33,
        iso: 'ID-JT',
        name: 'Central Java',
        description: 'Jawa Tengah',
        timezone: 'UTC+7'
    },
    {
        id: 62,
        iso: 'ID-KT',
        name: 'Central Kalimantan',
        description: 'Kalimantan Tengah',
        timezone: 'UTC+7'
    },
    {
        id: 94,
        iso: 'ID-PT',
        name: 'Central Papua',
        description: 'Papua Tengah',
        timezone: 'UTC+9'
    },
    {
        id: 72,
        iso: 'ID-ST',
        name: 'Central Sulawesi',
        description: 'Sulawesi Tengah',
        timezone: 'UTC+8'
    },
    {
        id: 35,
        iso: 'ID-JI',
        name: 'East Java',
        description: 'Jawa Timur',
        timezone: 'UTC+7'
    },
    {
        id: 64,
        iso: 'ID-KI',
        name: 'East Kalimantan',
        description: 'Kalimantan Timur',
        timezone: 'UTC+8'
    },
    {
        id: 53,
        iso: 'ID-NT',
        name: 'East Nusa Tenggara',
        description: 'Nusa Tenggara Timur',
        timezone: 'UTC+8'
    },
    {
        id: 75,
        iso: 'ID-GO',
        name: 'Gorontalo',
        timezone: 'UTC+8'
    },
    {
        id: 95,
        iso: 'ID-PE',
        name: 'Highland Papua',
        description: 'Papua Pegunungan',
        timezone: 'UTC+9'
    },
    {
        id: 15,
        iso: 'ID-JA',
        name: 'Jambi',
        timezone: 'UTC+7'
    },
    {
        id: 18,
        iso: 'ID-LA',
        name: 'Lampung',
        timezone: 'UTC+7'
    },
    {
        id: 81,
        iso: 'ID-MA',
        name: 'Maluku',
        timezone: 'UTC+9'
    },
    {
        id: 65,
        iso: 'ID-KU',
        name: 'North Kalimantan',
        description: 'Kalimantan Utara',
        timezone: 'UTC+8'
    },
    {
        id: 82,
        iso: 'ID-MU',
        name: 'North Maluku',
        description: 'Maluku Utara',
        timezone: 'UTC+9'
    },
    {
        id: 71,
        iso: 'ID-SA',
        name: 'North Sulawesi',
        description: 'Sulawesi Utara',
        timezone: 'UTC+8'
    },
    {
        id: 12,
        iso: 'ID-SU',
        name: 'North Sumatra',
        description: 'Sumatera Utara',
        timezone: 'UTC+7'
    },
    {
        id: 91,
        iso: 'ID-PA',
        name: 'Papua',
        timezone: 'UTC+9'
    },
    {
        id: 14,
        iso: 'ID-RI',
        name: 'Riau',
        timezone: 'UTC+7'
    },
    {
        id: 21,
        iso: 'ID-KR',
        name: 'Riau Islands',
        description: 'Kepulauan Riau',
        timezone: 'UTC+7'
    },
    {
        id: 63,
        iso: 'ID-KS',
        name: 'South Kalimantan',
        description: 'Kalimantan Selatan',
        timezone: 'UTC+8'
    },
    {
        id: 93,
        iso: 'ID-PS',
        name: 'South Papua',
        description: 'Papua Selatan',
        timezone: 'UTC+9'
    },
    {
        id: 73,
        iso: 'ID-SN',
        name: 'South Sulawesi',
        description: 'Sulawesi Selatan',
        timezone: 'UTC+8'
    },
    {
        id: 16,
        iso: 'ID-SS',
        name: 'South Sumatra',
        description: 'Sumatera Selatan',
        timezone: 'UTC+7'
    },
    {
        id: 74,
        iso: 'ID-SG',
        name: 'Southeast Sulawesi',
        description: 'Sulawesi Tenggara',
        timezone: 'UTC+8'
    },
    {
        id: 96,
        iso: 'ID-PD',
        name: 'Southwest Papua',
        description: 'Papua Barat Daya',
        timezone: 'UTC+9'
    },
    {
        id: 31,
        iso: 'ID-JK',
        name: 'Special Capital Region of Jakarta',
        description: 'Daerah Khusus Ibukota Jakarta',
        timezone: 'UTC+7'
    },
    {
        id: 32,
        iso: 'ID-JB',
        name: 'West Java',
        description: 'Jawa Barat',
        timezone: 'UTC+7'
    },
    {
        id: 61,
        iso: 'ID-KB',
        name: 'West Kalimantan',
        description: 'Kalimantan Barat',
        timezone: 'UTC+7'
    },
    {
        id: 52,
        iso: 'ID-NB',
        name: 'West Nusa Tenggara',
        description: 'Nusa Tenggara Barat',
        timezone: 'UTC+8'
    },
    {
        id: 92,
        iso: 'ID-PB',
        name: 'West Papua',
        description: 'Papua Barat',
        timezone: 'UTC+9'
    },
    {
        id: 76,
        iso: 'ID-SR',
        name: 'West Sulawesi',
        description: 'Sulawesi Barat',
        timezone: 'UTC+8'
    },
    {
        id: 13,
        iso: 'ID-SB',
        name: 'West Sumatra',
        description: 'Sumatera Barat',
        timezone: 'UTC+7'
    },
    {
        id: 34,
        iso: 'ID-YO',
        name: 'Special Region of Yogyakarta',
        description: 'Daerah Istimewa Yogyakarta',
        timezone: 'UTC+7'
    },
];
