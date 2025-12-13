"use client"

import Link from 'next/link'
import { toast } from 'react-toastify';

export default function MyLink({ data, copy=false, children }) {
    // custom component - is a link by default, or can specify to be a copy button
    // "data" is either the link href, or the text to be copied, depending on whether "copy" is set.
    if(copy) {
        return <button
            onClick={() => {
                navigator.clipboard.writeText(data);
                toast.success("Copied to clipboard!");
            }}
            className="text-link cursor-pointer"
        >{children}</button>
    } else {
        return <Link href={data} className="text-link">{children}</Link>
    }
}