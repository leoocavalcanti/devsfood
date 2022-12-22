import { createDispatchHook } from "react-redux";

let BASE = "https://api.b7web.com.br/devsfood/api";

export const api = {

    getCategories: async () => {

        const res = await fetch(BASE+"/categories");
        const json = await res.json();
        return json;

    },

    getProducts: async (category, page, search) => {

        let fields = {};
        if(category !== 0){

            fields.category = category;
        }
        if(page > 0){

            fields.page = page;
        }
        if(search !== ""){

            fields.search = search;
        }

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(BASE+"/products?"+queryString);
        const json = await res.json();
        return json;
    },

    doLogin: async (email, password) => {

        try{
            
            const res = await fetch(BASE+"/login", {

                method: "POST",
                headers: {

                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})

            })

            const json = await res.json();
            return json;
        }

        catch(erro){

            return erro.message;
        }

    },

    autoLogin: async (token) => {

        let query = new URLSearchParams(token).toString();
        const res = await fetch(`${BASE}/user?token=${query}`);
        const json = res.json();
        return json;
    },

    userRegister: async (name, email, password) => {

        try{
        const res = await fetch(BASE+"/user", {

            method: "POST",
            headers: {

                "Content-Type": "application/json"
            },
            body: JSON.stringify({name, email, password})
        });

        const json = res.json();
        return json;
        }
        catch(erro){

            return erro.message;
        }
    }
}