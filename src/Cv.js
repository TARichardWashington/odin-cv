export default function Cv({ data }) {
    return (
        <div className="p-2 flex justify-center">
            <div className="bg-late-600">
                {data.name}
            </div>
        </div>
    );
}