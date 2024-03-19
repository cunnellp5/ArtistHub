// type Theme = 'skeleton' | 'wintry' | 'modern' | 'rocket' | 'seafoam' | 'vintage' | 'sahara' | 'hamlindigo' | 'goldNouveau' | 'crimson';

// export const theme: Theme = 'skeleton';

type Mode = 'light' | 'dark';
export let mode: Mode = 'dark';

export const toggleMode = () => {
    mode = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.className = mode;
};
