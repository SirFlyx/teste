export function generate(raw) {
    try {
        const json = JSON.parse(raw)
        if (json.color) toHexa(json.color)
        for (let field in json) {
            switch (field) {
                case 'description': 
                    json[field] = json[field].slice(0, 2048)
                    break
                case 'title':
                    json[field] = json[field].slice(0, 50)
                    break
                case 'fields':
                    json.fields = json.fields.map(x => {
                        return {
                            title: x.title.slice(0, 50),
                            value: x.title.slice(0, 1020)
                        }
                    })
                    break
            }
        }
        return json
    } catch(e) {
        console.log(e)
    }
}

function toHexa(decimal) {
    if (decimal < 0) decimal = 0xFFFFFFFF + decimal + 1
    return parseInt(decimal.toString(16).toUpperCase())
}