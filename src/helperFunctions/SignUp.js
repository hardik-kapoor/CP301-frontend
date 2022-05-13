export function ValidateEmail(mail) {
    if(/[0-9]{4}[a-z]{3}[0-9]{4}@iitrpr\.ac\.in/.test(mail))
        return true;
    return false;
}