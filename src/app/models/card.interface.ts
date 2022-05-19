export interface Card {
    id: string;
    name: string;
    contributed_by: string;
    tagline: string;
    description: string;
    tip: string;
    food_pairing: [];
    first_brewed: Date;
    brewers_tips: string;
    image_url: string;
    abv: number;
}