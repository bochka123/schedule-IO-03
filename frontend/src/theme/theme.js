export const borders = {
    borderBlack: "1px solid #343434",
    borderLight: "1px solid #ECECEC"
}

const colors = {
    backgroundLight: "#D9D9D9",
    backgroundDark: "#2E2E2E",
    fontLight: "#343434",
    fontDark: "#ECECEC",
    switcherOutLight: "#C7C7C7",
    switcherOutDark: "#5C5C5C",
    switcherInLight: "#828282",
    switcherInDark: "#D2D2D2",
    divsLight: "#F1F1F1",
    divsDark: "#1B1B1B",
    linkBackLight: "#C7C7C7",
    linkBackDark: "#5C5C5C",
    linkTextLight: "#343434",
    linkTextDark: "#ECECEC",
    error: "red"
}

const fontSizes = {
    xs: "1rem",
    md: "20px"
}

const spaces = {
    xs: "2px"
}

const width = {
    sm: "35px",
    lg: "80px"
}

const height = {
    sm: "35px",
    md: "41px"
}

const radius = {
    lg: "30px",
    circle: "50%"
}

export const themes = {
    light: {
        backgroundColor: colors.backgroundLight,
        color: colors.fontLight,
        switcherOut: {
            position: "relative",
            background: colors.switcherOutLight,
            border: borders.borderBlack,
            borderRadius: radius.lg,
            width: width.lg,
            height: height.md
        },
        switcherIn: {
            position: "absolute",
            transition: "all 0.5s ease-in-out",
            margin: spaces.xs,
            width: width.sm,
            height: height.sm,
            background: colors.switcherInLight,
            borderRadius: radius.circle,
        },
        div: {
            backgroundColor: colors.divsLight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: fontSizes.md,
            textAlign: "center",
        },
        a:{
            border: borders.borderBlack,
            backgroundColor: colors.linkBackLight,
            color: colors.linkTextLight
        },
        p:{
            color: colors.fontLight,
        },
        modal:{
            color: colors.fontLight,
            backgroundColor: colors.backgroundLight
        },
        input: {
            background: colors.linkBackLight,
            border: `1px solid ${colors.linkTextLight}`,
            color: colors.fontLight
        },
        error: {
            color: colors.error,
            fontSize: fontSizes.xs
        }
    },
    dark: {
        backgroundColor: colors.backgroundDark,
        color: colors.fontDark,
        switcherOut: {
            position: "relative",
            background: colors.switcherOutDark,
            border: borders.borderLight,
            borderRadius: radius.lg,
            width: width.lg,
            height: height.md
        },
        switcherIn: {
            position: "absolute",
            transition: "all 0.5s ease-in-out",
            margin: spaces.xs,
            width: width.sm,
            height: height.sm,
            background: colors.switcherInDark,
            borderRadius: radius.circle,
        },
        div: {
            backgroundColor: colors.divsDark,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: fontSizes.md,
            textAlign: "center",
        },
        a:{
            border: borders.borderLight,
            backgroundColor: colors.linkBackDark,
            color: colors.linkTextDark,
        },
        p:{
            color: colors.fontDark,
        },
        modal:{
            color: colors.fontDark,
            backgroundColor: colors.backgroundDark,
        },
        input: {
            background: colors.linkBackDark,
            border: `1px solid ${colors.linkTextDark}`,
            color: colors.fontDark
        },
        error: {
            color: colors.error,
            fontSize: fontSizes.xs
        }
    }
}
