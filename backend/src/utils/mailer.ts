import transporter from '../configs/mail.config';
import fs from 'fs';
import path from 'path';

interface SendEmailOptions {
    to: string;
    subject: string;
    templatePath?: string;
    context?: Record<string, string>;
    attachments?: { filename: string; path: string }[];
}

export const sendEmail = async ({
    to,
    subject,
    templatePath,
    context = {},
    attachments = [],
}: SendEmailOptions): Promise<void> => {
    let html = '';

    if (templatePath) {
        const absolutePath = path.resolve(templatePath);
        html = fs.readFileSync(absolutePath, 'utf-8');

        // Replace {{placeholders}} with context values
        for (const key in context) {
            html = html.replace(new RegExp(`{{\\s*${key}\\s*}}`, 'g'), context[key]);
        }
    }

    await transporter.sendMail({
        from: `"No Reply" <${process.env.SMTP_USER}>`,
        to,
        subject,
        html,
        attachments,
    });
};
