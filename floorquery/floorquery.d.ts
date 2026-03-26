export { }
declare global {
    /**
     * ### INTERNAL HELPER
     * 
     * Returns Error, used when a query-related problem happens. Fill in operator and params correctly for best debugging experience.
     * @param message Log message
     * @param operator Operator shown in debug section
     * @param params Params shown in debug section
     */
    function queryError(message: string, operator: string, params: string): Error

    /**
     * Shorthand syntax for many operations. Provided by FloorJS.
     * @param operator Typed operator which uses params
     * @param params Extra info optionally used by operator
     */
    function $(operator: "el" | "EL" | "ls" | "LS" | "ss" | "SS", params: string): any
}
