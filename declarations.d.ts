declare module "@jamescoyle/vue-icon" {
    import { DefineComponent } from "vue";

    const SvgIcon: DefineComponent<{
        type: string;
        path: string;
    }>;

    export default SvgIcon;
}
