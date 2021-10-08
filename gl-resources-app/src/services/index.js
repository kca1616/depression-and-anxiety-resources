export const baseURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/resources`;
export const baseTipsURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/tips`;

export const config = {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  },
};