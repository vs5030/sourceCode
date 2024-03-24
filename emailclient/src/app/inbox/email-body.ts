export interface EmailBody {
    id: string;
    subject: string;
    text: string;
    to: string;
    from: string;
    html: string;
}

// export interface EmailError {
//     status: string;
//     statusText: string;
// }