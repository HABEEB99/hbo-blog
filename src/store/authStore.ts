import create from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = (set: any) => ({
	authorProfile: null,

	addAuthor: (author: any) => set({ authorProfile: author }),
	removeAuthor: () => set({ authorProfile: null }),
});

const useAuthStore = create(
	persist(authStore, {
		name: 'auth',
	}),
);

export default useAuthStore;
