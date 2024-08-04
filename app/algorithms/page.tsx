const AlgorithmsListPage = async () => {
    let fileList: string[] = [];
    try {
        const resp = await fetch("http://localhost:3000/api/algorithms", { cache: "force-cache" });
        const data = await resp.json();
        fileList = data.fileList;
    } catch (e) {
        console.log(e);
    }

    // const fileList: string[] = data.fileList;

    return <pre>{fileList}</pre>;
};

export default AlgorithmsListPage;
