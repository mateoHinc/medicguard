

export const renderDayCellContent = ({ date }) => {
    return (
      <div className="custom-day-cell">
        {date.getDate()}
      </div>
    );
  };