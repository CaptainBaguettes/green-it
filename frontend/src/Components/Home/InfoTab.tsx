type InfoTabProps = {
    title: string;
    text: string;
    image: string;
};

const InfoTab: React.FC<InfoTabProps> = ({ title, text, image }) => (
    <details>
        <summary>{title}</summary>
        <p>{text}</p>
        <img src={image} alt={`Illustration ${title}`} loading="lazy" />
    </details>
);

export default InfoTab;