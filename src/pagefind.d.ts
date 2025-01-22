declare module '@pagefind/default-ui' {
    interface PagefindUI {
      new (options?: {
        element?: string | HTMLElement;
        bundlePath?: any;
        showImages?: boolean;
        showEmptyFilters?: boolean;
        resetStyles?: boolean;
        [key: string]: any;
      }): PagefindUI;
    }
  
    const PagefindUI: PagefindUI;
    export { PagefindUI };
  }