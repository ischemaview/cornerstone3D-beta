const _configuration = {
    autoRenderOnLoad: true,
    autoRenderPercentage: 2,
};
/**
 * Configuration used by the library that impacts behavior. Supports updating
 * one or more configuration value at a time.
 */
const configuration = {
    /**
     * Returns the Library Configuration's current values
     *
     * @example
     * Retrieving a library configuration value:
     * ```
     * const { autoRenderOnLoad } = configuration.get();
     * ```
     */
    get: () => {
        return JSON.parse(JSON.stringify(_configuration));
    },
    /**
     * Set one or more library configuration values
     *
     * @param newConfiguration key/value pairs to update
     * @example
     * Update a single configuration field's value:
     * ```
     * // => { autoRenderOnLoad: true, autoRenderPercentage: 2 }
     * configuration.set({ autoRenderOnLoad: false });
     * // => { autoRenderOnLoad: false, autoRenderPercentage: 2 }
     * ```
     * @example
     * Update multiple configuration field values:
     * ```
     * // => { autoRenderOnLoad: true, autoRenderPercentage: 2 }
     * configuration.set({ autoRenderOnLoad: false, autoRenderPercentage: 10 });
     * // => { autoRenderOnLoad: false, autoRenderPercentage: 10 }
     * ```
     */
    set: (newConfiguration) => {
        Object.assign(_configuration, newConfiguration);
    },
};
export default configuration;
//# sourceMappingURL=configuration.js.map