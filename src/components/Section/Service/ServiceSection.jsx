"use client"

import Link from "next/link";
import ServiceCard from "~/components/Ui/Cards/ServiceCard";
import services from '~/db/serviceData.json'

const ServiceSection = () => {
    return (
        <div className="section bg-light1 tekup-section-padding2">
        <div className="container">
          <div className="tekup-section-title center">
            <h2>Our services</h2>
            <p>Vehicle scrapping, dismantling, and industrial scrap trading across Karnataka.</p>
          </div>
          <div className="row">
      {services.map(service => (
        <ServiceCard key={service.id} service={service} className="col-lg-6" />
      ))}
           
          </div>
        </div>
      </div>
    );
};

export default ServiceSection;