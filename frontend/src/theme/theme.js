export const borders = {
    borderBlack: "1px solid #343434",
    borderLight: "1px solid #ECECEC"
}

export const themes = {
    light: {
        backgroundColor: "#D9D9D9",
        color: "#343434",
        switcherOut: {
            position: "relative",
            background: "#C7C7C7",
            border: borders.borderBlack,
            borderRadius: "30px",
            width: "80px",
            height: "41px"
        },
        switcherIn: {
            position: "absolute",
            transition: "all 0.5s ease-in-out",
            margin: "2px",
            width: "35px",
            height: "35px",
            background: "#828282",
            borderRadius: "50%",
        },
        div: {
            backgroundColor: "#F1F1F1",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            textAlign: "center",
        },
        a:{
            border: borders.borderBlack,
            backgroundColor: "#C7C7C7",
            color: "#343434"
        }
    },
    dark: {
        backgroundColor: "#2E2E2E",
        color: "#ECECEC",
        switcherOut: {
            position: "relative",
            background: "#5C5C5C",
            border: borders.borderLight,
            borderRadius: "30px",
            width: "80px",
            height: "41px"
        },
        switcherIn: {
            position: "absolute",
            transition: "all 0.5s ease-in-out",
            margin: "2px",
            width: "35px",
            height: "35px",
            background: "#D2D2D2",
            borderRadius: "50%",
        },
        div: {
            backgroundColor: "#1B1B1B",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            textAlign: "center",
        },
        a:{
            border: borders.borderLight,
            backgroundColor: "#5C5C5C",
            color: "#ECECEC"
        }
    }
}
