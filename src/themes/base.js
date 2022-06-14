import React from 'react'
import lightTheme from './LightTheme'
import darkTheme from './DarkTheme'

// ##############################################################
// Theme base for light/dark themes
// ##############################################################

const themes={
    lightTheme,
    darkTheme
}

export default function getTheme(theme){
    return themes[theme]
}