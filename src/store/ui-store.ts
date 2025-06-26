import { create } from 'zustand';

interface ToastState {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
}

interface UIStore {
  toast: ToastState;
  showToast: (message: string, type?: 'success' | 'error' | 'info') => void;
  hideToast: () => void;
}

export const useUIStore = create<UIStore>((set) => ({
  toast: {
    message: '',
    type: 'info',
    isVisible: false,
  },
  showToast: (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    set({
      toast: {
        message,
        type,
        isVisible: true,
      },
    });
    
    // Auto-hide toast after 4 seconds
    setTimeout(() => {
      set((state) => ({
        toast: {
          ...state.toast,
          isVisible: false,
        },
      }));
    }, 4000);
  },
  hideToast: () => {
    set((state) => ({
      toast: {
        ...state.toast,
        isVisible: false,
      },
    }));
  },
}));