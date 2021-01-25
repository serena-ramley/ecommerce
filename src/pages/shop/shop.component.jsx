import React from "react";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

class ShopPage extends React.component {
  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => <CollectionsOverview {...props} />}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          render={(props) => <CollectionPage {...props} />}
        />
      </div>
    );
  }
}

export default ShopPage;
