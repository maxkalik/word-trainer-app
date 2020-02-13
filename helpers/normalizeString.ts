const normalizeString = (str: string): string => str.replace(/[&/\\#,+()$~%.'":*?<>{}]/g, '').toLowerCase();

export default normalizeString;
