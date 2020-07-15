export const FEATURE_IS_ADDED = 'FEATURE_IS_ADDED'
export const FEATURE_IS_REMOVED = 'FEATURE_IS_REMOVED'




export const addFeature = feature => {
    return { type: FEATURE_IS_ADDED, payload: feature}
}
export const removeFeature = feature => {
    return { type: FEATURE_IS_REMOVED, payload: feature}
}