const StreamPage = () => {
    return (
        <section>
            <form className="">
                <input type="text" name="post-caption" id="post-caption" />
                <textarea name="post-content" id="post-content" cols={30} rows={10}></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
    );
};

export default StreamPage;
