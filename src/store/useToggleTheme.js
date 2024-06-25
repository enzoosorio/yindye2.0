import { create } from 'zustand'

export const useToggleTheme = create((set) => ({
    isThemeDark: false,
    toggleThemeIsDark: () => set((state) => ({ isThemeDark: !state.isThemeDark })),
    setThemeIsDark: (value) => set({ isThemeDark: value }), // Añadir esta línea
}))
