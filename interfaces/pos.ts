export interface ProductInterface {
    readonly id: number;
    name: string;
    photo: File;
    defaultPrice: number;
    catalogId: number;
}

export interface ItemInterface {
    readonly id: number;
    mainItemId: number;
    mainPrice: number;
    groupId: number;
    name: string;
    additional: Array<{ productId: number; price: number; many: boolean }>;
    catalogId: number;
}

export interface ItemGroupInterface {
    readonly id: number;
    name: string;
    photo: File;
    catalogId: number;
}

export interface CatalogInterface {
    readonly id: number;
    name: string;
    emoji: string;
    currencySymbol: string;
    password: string;
    shiftStart: string;
    shiftEnd: string;
    timezone: string;
    locked: boolean;
}

export interface OrderInterface {
    readonly id: number;
    when: Date;
    itemId: number;
    additional: Array<{ productId: number; price: number; count: number }>;
}
