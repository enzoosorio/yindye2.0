import { create } from 'zustand'

export const useStorePannel = create((set) => ({
    userIsPressed: false,
    toggleUserIsPressed: () => set((state) => ({ userIsPressed: !state.userIsPressed })),
    setUserIsPressed: (value) => set({ userIsPressed: value }), // Añadir esta línea
}))
