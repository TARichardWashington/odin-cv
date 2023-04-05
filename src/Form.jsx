export default function Form({ update }) {
    return (
        <div className="p-2 dark:bg-slate-800 bg-slate-200 flex-1 flex justify-center">
            <div className="p-5 dark:bg-slate-900 bg-slate-300 rounded dark:text-slate-100 text-slate-900">
                <h1 className="text-xl text-center pb-5">Basic Details</h1>
                <form>
                    <div className="mb-4">
                        <label className="pr-5">Name</label>
                        <input type="text" className="text-slate-900 rounded p-1" name="name" onChange={update} />
                    </div>
                    <div className="mb-4">
                        <label className="pr-5">Email</label>
                        <input type="email" className="text-slate-900 rounded p-1" name="email" onChange={update} />
                    </div>
                    <div className="mb-4">
                        <label className="pr-5">Phone</label>
                        <input type="text" className="text-slate-900 rounded p-1" name="phone" onChange={update} />
                    </div>
                </form>
            </div>
        </div>
    );
}