"use server"

import axios from "axios";

export const getHomePageContent = async () => {
    try {
        const res = await axios.get(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`, {
            headers: {
                "User-Agent": 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
            }
        }).then((res) => {
            return res.data;
        });

        if (!res || !res.data ) {
            return null;
        }

        return res.data;
    }
    catch (error) {
        console.log("error: while fetching leaderboard data (strapi.ts) ", error);
        return null;
    }

}

// https://www.swiggy.com/dapi/restaurants/search/v3?lat=28.65420&lng=77.23730&str=Burger&submitAction=SUGGESTION&selectedPLTab=RESTAURANT' \
// --header 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36' \
// --header 'Cookie: __SW=ySW6bBgkWelWfaDiqQhOsDExisNgqIWm; _device_id=g3b8908a-c346-4cd4-936b-7fd8c44b2c34; _guest_tid=19d04171-14b6-4e62-84cd-f5e4b160d27c; _sid=g3b8908a-c346-4cd4-936b-7fd8c44b2c34'