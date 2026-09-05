'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

import {
  Globe2,
  Ship,
  Plane,
  ShieldCheck,
  ArrowRight,
  Anchor,
  Navigation,
  MapPin,
  Compass,
  ExternalLink,
  Layers,
  ZoomIn,
  ZoomOut,
  Maximize2,
} from 'lucide-react';
import { ScrollReveal } from '@/components/animation/ScrollReveal';

export interface TradeCorridor {
  id: string;
  name: string;
  badge: string;
  origin: string;
  destination: string;
  oceanTransit: string;
  airTransit: string;
  keyPorts: string;
  incotermsCommon: string;
  description: string;
  routeColor: string;
  googleMapsUrl: string;
  center: { lat: number; lng: number };
  zoom: number;
}

export interface TradeHubLocation {
  id: string;
  name: string;
  shortLabel: string;
  country: string;
  flag: string;
  role: string;
  ports: string;
  lat: number;
  lng: number;
  pinColor: string;
  isOrigin?: boolean;
  corridorId?: string;
  googleMapsUrl: string;
}

export const tradeCorridors: TradeCorridor[] = [
  {
    id: 'europe',
    name: 'India ↔ Europe Corridor',
    badge: 'European Gateway',
    origin: 'Nhava Sheva / Mundra / Chennai',
    destination: 'Rotterdam / Antwerp / Hamburg / Felixstowe / London',
    oceanTransit: '18–24 Days',
    airTransit: '24–48 Hours',
    keyPorts: 'Jawaharlal Nehru Port (JNPT), Rotterdam Maasvlakte, Frankfurt CargoCity, London Gateway',
    incotermsCommon: 'FOB, CIF, CIP, DDP',
    description:
      'Direct weekly maritime sailings and daily scheduled air charters servicing EU manufacturing, life sciences, and automotive engineering supply chains.',
    routeColor: '#0284C7',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Rotterdam+Netherlands',
    center: { lat: 35.0, lng: 38.0 },
    zoom: 4,
  },
  {
    id: 'middle-east',
    name: 'India ↔ Middle East & GCC Hub',
    badge: 'Gulf Transshipment',
    origin: 'Nhava Sheva / Mundra / Cochin',
    destination: 'Jebel Ali / Khalifa / Dammam / Hamad / Doha',
    oceanTransit: '3–6 Days',
    airTransit: 'Same-Day / 12 Hours',
    keyPorts: 'Jebel Ali Port (DP World), Dubai World Central (DWC), Dammam King Abdulaziz',
    incotermsCommon: 'FOB, CIF, CFR, DAP',
    description:
      'High-frequency feeder services and regional transshipment consolidation facilitating rapid perishable, pharmaceutical, and construction material flows.',
    routeColor: '#059669',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jebel+Ali+Port+Dubai+UAE',
    center: { lat: 23.0, lng: 60.0 },
    zoom: 5,
  },
  {
    id: 'americas',
    name: 'India ↔ North America Corridors',
    badge: 'Transatlantic & Gulf',
    origin: 'Nhava Sheva / Mundra / Hazira',
    destination: 'New York/NJ • Savannah • Houston • Los Angeles',
    oceanTransit: '24–32 Days',
    airTransit: '36–48 Hours',
    keyPorts: 'Port of New York & New Jersey, Houston Ship Channel, Port of Los Angeles',
    incotermsCommon: 'FCA, FOB, CIF, DDP',
    description:
      'End-to-end multimodal logistics linking industrial manufacturing belts with US East Coast and Gulf Coast gateway terminals under bonded tariff regimes.',
    routeColor: '#4F46E5',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+New+York+and+New+Jersey',
    center: { lat: 32.0, lng: -20.0 },
    zoom: 3,
  },
  {
    id: 'east-asia',
    name: 'India ↔ East Asia & ASEAN Network',
    badge: 'ASEAN & Far East',
    origin: 'Chennai / Visakhapatnam / Kolkata',
    destination: 'Singapore • Shanghai • Tokyo • Busan • Port Klang',
    oceanTransit: '8–14 Days',
    airTransit: '18–24 Hours',
    keyPorts: 'PSA Singapore, Shanghai Yangshan, Port Klang Northport, Busan New Port, Tokyo Port',
    incotermsCommon: 'EXW, FCA, CIF, CPT',
    description:
      'Deep-water direct services and regional Free Trade Agreement (AITIGA/CEPA) preferential tariff documentation for electronics and industrial commodities.',
    routeColor: '#D97706',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PSA+Singapore+Port',
    center: { lat: 18.0, lng: 105.0 },
    zoom: 4,
  },
];

export const tradeHubLocations: TradeHubLocation[] = [
  // 1. Origin Central HQ
  {
    id: 'india',
    name: 'India Central Trade Gateway',
    shortLabel: 'INDIA (HQ)',
    country: 'India',
    flag: '🇮🇳',
    role: 'Central Export Origin & EXIM Desk',
    ports: 'Nhava Sheva (JNPT) • Mundra • Chennai • Delhi',
    lat: 18.9499,
    lng: 72.9515,
    pinColor: '#EF4444',
    isOrigin: true,
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jawaharlal+Nehru+Port+Trust+Mundra+India',
  },
  // 2. Middle East & GCC
  {
    id: 'uae',
    name: 'United Arab Emirates',
    shortLabel: 'DUBAI / JEBEL ALI',
    country: 'UAE',
    flag: '🇦🇪',
    role: 'Middle East Transshipment Hub',
    ports: 'Jebel Ali Port • Dubai World Central • Khalifa',
    lat: 25.0064,
    lng: 55.0634,
    pinColor: '#059669',
    corridorId: 'middle-east',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Jebel+Ali+Port+Dubai+UAE',
  },
  {
    id: 'saudi',
    name: 'Saudi Arabia',
    shortLabel: 'DAMMAM / GCC',
    country: 'Saudi Arabia',
    flag: '🇸🇦',
    role: 'Gulf Industrial Logistics Terminal',
    ports: 'King Abdulaziz Port • Riyadh Dry Port',
    lat: 26.4207,
    lng: 50.0888,
    pinColor: '#059669',
    corridorId: 'middle-east',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=King+Abdulaziz+Port+Dammam+Saudi+Arabia',
  },
  // 3. Europe Gateways
  {
    id: 'netherlands',
    name: 'Netherlands',
    shortLabel: 'ROTTERDAM',
    country: 'Netherlands',
    flag: '🇳🇱',
    role: 'Primary European Sea Gateway',
    ports: 'Port of Rotterdam • Maasvlakte Terminal',
    lat: 51.9244,
    lng: 4.4777,
    pinColor: '#0284C7',
    corridorId: 'europe',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Rotterdam+Netherlands',
  },
  {
    id: 'germany',
    name: 'Germany',
    shortLabel: 'HAMBURG / FRANKFURT',
    country: 'Germany',
    flag: '🇩🇪',
    role: 'European Air Cargo & Rail Freight',
    ports: 'Hamburg Port • Frankfurt CargoCity',
    lat: 50.1109,
    lng: 8.6821,
    pinColor: '#0284C7',
    corridorId: 'europe',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Hamburg+Germany',
  },
  {
    id: 'uk',
    name: 'United Kingdom',
    shortLabel: 'LONDON / FELIXSTOWE',
    country: 'UK',
    flag: '🇬🇧',
    role: 'British Commercial Maritime Hub',
    ports: 'Port of Felixstowe • London Gateway • Southampton',
    lat: 51.9566,
    lng: 1.3513,
    pinColor: '#0284C7',
    corridorId: 'europe',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Felixstowe+London+Gateway+UK',
  },
  // 4. North America
  {
    id: 'us-east',
    name: 'United States (East Coast)',
    shortLabel: 'NEW YORK / NJ',
    country: 'USA',
    flag: '🇺🇸',
    role: 'US East Coast Gateway Terminal',
    ports: 'Port of New York & New Jersey • Savannah',
    lat: 40.7128,
    lng: -74.006,
    pinColor: '#4F46E5',
    corridorId: 'americas',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+New+York+and+New+Jersey',
  },
  {
    id: 'us-gulf',
    name: 'United States (Gulf Coast)',
    shortLabel: 'HOUSTON',
    country: 'USA',
    flag: '🇺🇸',
    role: 'Gulf Coast Energy & Industrial Corridor',
    ports: 'Houston Ship Channel • Port of Mobile',
    lat: 29.7604,
    lng: -95.3698,
    pinColor: '#4F46E5',
    corridorId: 'americas',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Houston+Texas+USA',
  },
  {
    id: 'us-west',
    name: 'United States (West Coast)',
    shortLabel: 'LOS ANGELES',
    country: 'USA',
    flag: '🇺🇸',
    role: 'Transpacific Gateway Port',
    ports: 'Port of Los Angeles • Port of Long Beach',
    lat: 33.7432,
    lng: -118.2673,
    pinColor: '#4F46E5',
    corridorId: 'americas',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Los+Angeles+California+USA',
  },
  // 5. Asia & Pacific
  {
    id: 'singapore',
    name: 'Singapore',
    shortLabel: 'SINGAPORE',
    country: 'Singapore',
    flag: '🇸🇬',
    role: 'Global Transshipment & Bunkering Hub',
    ports: 'PSA Singapore • Jurong Port • Changi Cargo',
    lat: 1.2644,
    lng: 103.8229,
    pinColor: '#D97706',
    corridorId: 'east-asia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=PSA+Singapore+Port',
  },
  {
    id: 'china',
    name: 'China',
    shortLabel: 'SHANGHAI',
    country: 'China',
    flag: '🇨🇳',
    role: 'Far East Manufacturing Gateway',
    ports: 'Shanghai Yangshan • Ningbo-Zhoushan • Shenzhen',
    lat: 31.2304,
    lng: 121.4737,
    pinColor: '#D97706',
    corridorId: 'east-asia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Shanghai+Yangshan+China',
  },
  {
    id: 'japan',
    name: 'Japan & South Korea',
    shortLabel: 'TOKYO / BUSAN',
    country: 'Japan & Korea',
    flag: '🇯🇵',
    role: 'High-Tech Industrial Corridors',
    ports: 'Port of Tokyo • Yokohama • Busan New Port',
    lat: 35.6762,
    lng: 139.6503,
    pinColor: '#D97706',
    corridorId: 'east-asia',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Tokyo+Japan',
  },
  {
    id: 'australia',
    name: 'Australia',
    shortLabel: 'SYDNEY / MELBOURNE',
    country: 'Australia',
    flag: '🇦🇺',
    role: 'Oceania Trade Corridors',
    ports: 'Port Botany (Sydney) • Port of Melbourne',
    lat: -33.8688,
    lng: 151.2093,
    pinColor: '#0891B2',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+Botany+Sydney+Australia',
  },
  {
    id: 'south-africa',
    name: 'South Africa',
    shortLabel: 'DURBAN',
    country: 'South Africa',
    flag: '🇿🇦',
    role: 'Southern African Trade Gateway',
    ports: 'Port of Durban • Cape Town Port',
    lat: -29.8587,
    lng: 31.0218,
    pinColor: '#0D9488',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Durban+South+Africa',
  },
  {
    id: 'brazil',
    name: 'Brazil',
    shortLabel: 'SANTOS / SÃO PAULO',
    country: 'Brazil',
    flag: '🇧🇷',
    role: 'Latin America Maritime Hub',
    ports: 'Port of Santos • Rio de Janeiro',
    lat: -23.9618,
    lng: -46.3322,
    pinColor: '#0284C7',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Port+of+Santos+Brazil',
  },
];

// Maritime coordinates for accurate geographical trade corridors
const corridorGeodesicPaths: Record<string, Array<{ lat: number; lng: number }>> = {
  europe: [
    { lat: 18.9499, lng: 72.9515 }, // India (Nhava Sheva)
    { lat: 14.5, lng: 58.0 },       // Arabian Sea
    { lat: 12.5, lng: 44.5 },       // Gulf of Aden / Bab el Mandeb
    { lat: 21.0, lng: 38.5 },       // Red Sea
    { lat: 29.9, lng: 32.5 },       // Suez Canal
    { lat: 34.5, lng: 24.0 },       // Mediterranean Sea
    { lat: 36.1, lng: -5.3 },       // Strait of Gibraltar
    { lat: 48.5, lng: -5.0 },       // Bay of Biscay
    { lat: 50.5, lng: 0.5 },        // English Channel
    { lat: 51.9244, lng: 4.4777 },  // Rotterdam, Netherlands
    { lat: 51.9566, lng: 1.3513 },  // Felixstowe, UK
  ],
  'middle-east': [
    { lat: 18.9499, lng: 72.9515 }, // India (Nhava Sheva)
    { lat: 22.5, lng: 62.0 },       // Gulf of Oman
    { lat: 26.0, lng: 56.5 },       // Strait of Hormuz
    { lat: 25.0064, lng: 55.0634 }, // Jebel Ali Port, UAE
    { lat: 26.4207, lng: 50.0888 }, // Dammam, Saudi Arabia
  ],
  americas: [
    { lat: 18.9499, lng: 72.9515 }, // India (Nhava Sheva)
    { lat: 12.5, lng: 44.5 },       // Gulf of Aden
    { lat: 29.9, lng: 32.5 },       // Suez
    { lat: 36.1, lng: -5.3 },       // Gibraltar
    { lat: 38.0, lng: -35.0 },      // North Atlantic
    { lat: 40.7128, lng: -74.006 }, // New York & NJ
    { lat: 29.7604, lng: -95.3698 },// Houston
  ],
  'east-asia': [
    { lat: 13.0827, lng: 80.2707 }, // Chennai, India
    { lat: 6.0, lng: 94.0 },        // Malacca Approach
    { lat: 1.2644, lng: 103.8229 }, // Singapore
    { lat: 14.0, lng: 112.0 },      // South China Sea
    { lat: 31.2304, lng: 121.4737 },// Shanghai, China
    { lat: 35.1796, lng: 129.0756 },// Busan, Korea
    { lat: 35.6762, lng: 139.6503 },// Tokyo, Japan
  ],
};

// Global Map Styles for clean, modern Google Maps theme matching SkyLink
const googleMapCustomStyles = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#DCEBFA' }],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#F1F5F9' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#FFFFFF' }, { lightness: 20 }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#CBD5E1' }, { weight: 1.2 }],
  },
  {
    featureType: 'administrative.country',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#475569' }],
  },
  {
    featureType: 'poi',
    stylers: [{ visibility: 'off' }],
  },
  {
    featureType: 'transit',
    stylers: [{ visibility: 'simplified' }],
  },
];

// Custom type definitions for Google Maps window
type GoogleMapsWindow = typeof window & {
  google?: {
    maps: {
      Map: new (element: HTMLElement, options: Record<string, unknown>) => {
        panTo: (latLng: { lat: number; lng: number }) => void;
        setZoom: (zoom: number) => void;
      };
      Marker: new (options: Record<string, unknown>) => {
        setMap: (map: unknown) => void;
        addListener: (event: string, handler: () => void) => void;
      };
      Polyline: new (options: Record<string, unknown>) => {
        setMap: (map: unknown) => void;
      };
      InfoWindow: new () => {
        setContent: (html: string) => void;
        open: (map: unknown, marker: unknown) => void;
      };
      MapTypeId: { ROADMAP: string };
      MapTypeControlStyle: { HORIZONTAL_BAR: number };
      ControlPosition: { TOP_RIGHT: number; RIGHT_BOTTOM: number; RIGHT_TOP: number };
      SymbolPath: { CIRCLE: number };
      Animation: { DROP: number };
    };
  };
};

export function GlobalRouteMap() {
  const [activeCorridorId, setActiveCorridorId] = useState<string>('europe');
  const [useFallbackEmbed, setUseFallbackEmbed] = useState<boolean>(() => !process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY);

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<{ panTo: (pos: { lat: number; lng: number }) => void; setZoom: (zoom: number) => void } | null>(null);
  const markersRef = useRef<Array<{ setMap: (map: unknown) => void }>>([]);
  const polylinesRef = useRef<Array<{ setMap: (map: unknown) => void }>>([]);
  const infoWindowRef = useRef<{ setContent: (html: string) => void; open: (map: unknown, marker: unknown) => void } | null>(null);

  const currentCorridor =
    tradeCorridors.find((c) => c.id === activeCorridorId) || tradeCorridors[0];

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';

  // Render Markers on Real Google Map
  const renderMapMarkers = useCallback((map: unknown, googleMaps: NonNullable<GoogleMapsWindow['google']>['maps']) => {
    // Clear previous markers
    markersRef.current.forEach((m) => m.setMap(null));
    markersRef.current = [];

    tradeHubLocations.forEach((hub) => {
      const isOrigin = hub.isOrigin;

      // Custom Google Maps Pin Icon
      const markerIcon = {
        path: googleMaps.SymbolPath.CIRCLE,
        fillColor: isOrigin ? '#EF4444' : hub.pinColor || '#0284C7',
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: '#FFFFFF',
        scale: isOrigin ? 8 : 6,
      };

      const marker = new googleMaps.Marker({
        position: { lat: hub.lat, lng: hub.lng },
        map: map,
        title: `${hub.flag} ${hub.shortLabel} - ${hub.name}`,
        icon: markerIcon,
        animation: isOrigin ? googleMaps.Animation.DROP : undefined,
      });

      marker.addListener('click', () => {
        if (infoWindowRef.current) {
          const contentString = `
            <div style="font-family: inherit; padding: 6px; max-width: 240px; color: #0F172A;">
              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
                <span style="font-size: 16px;">${hub.flag}</span>
                <strong style="font-size: 13px; color: #0A2540;">${hub.shortLabel}</strong>
              </div>
              <div style="font-size: 11px; color: #0284C7; font-weight: 600; margin-bottom: 4px;">${hub.role}</div>
              <div style="font-size: 11px; color: #475569; line-height: 1.4; margin-bottom: 8px;">
                <strong>Ports:</strong> ${hub.ports}
              </div>
              <a href="${hub.googleMapsUrl}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 4px; font-size: 11px; font-weight: 700; color: #0284C7; text-decoration: none;">
                Open in Google Maps &rarr;
              </a>
            </div>
          `;
          infoWindowRef.current.setContent(contentString);
          infoWindowRef.current.open(map, marker);
        }
      });

      markersRef.current.push(marker);
    });
  }, []);

  // Render Polylines for Trade Routes
  const renderCorridorPolylines = useCallback((map: unknown, googleMaps: NonNullable<GoogleMapsWindow['google']>['maps'], currentActiveId: string) => {
    // Clear previous polylines
    polylinesRef.current.forEach((p) => p.setMap(null));
    polylinesRef.current = [];

    Object.entries(corridorGeodesicPaths).forEach(([corridorId, pathPoints]) => {
      const isSelected = corridorId === currentActiveId;

      const polyline = new googleMaps.Polyline({
        path: pathPoints,
        geodesic: true,
        strokeColor:
          corridorId === 'europe'
            ? '#0284C7'
            : corridorId === 'middle-east'
            ? '#059669'
            : corridorId === 'americas'
            ? '#4F46E5'
            : '#D97706',
        strokeOpacity: isSelected ? 0.95 : 0.35,
        strokeWeight: isSelected ? 4 : 2,
        map: map,
      });

      polylinesRef.current.push(polyline);
    });
  }, []);

  // Function to initialize Google Map instance
  const initGoogleMap = useCallback(() => {
    const win = typeof window !== 'undefined' ? (window as GoogleMapsWindow) : undefined;
    if (!mapContainerRef.current || !win?.google?.maps) return;

    try {
      const googleMaps = win.google.maps;

      const mapOptions = {
        center: currentCorridor.center,
        zoom: currentCorridor.zoom,
        minZoom: 2,
        maxZoom: 14,
        mapTypeId: googleMaps.MapTypeId.ROADMAP,
        styles: googleMapCustomStyles,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: googleMaps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: googleMaps.ControlPosition.TOP_RIGHT,
        },
        zoomControl: true,
        zoomControlOptions: {
          position: googleMaps.ControlPosition.RIGHT_BOTTOM,
        },
        scaleControl: true,
        streetViewControl: false,
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: googleMaps.ControlPosition.RIGHT_TOP,
        },
        gestureHandling: 'cooperative',
      };

      const map = new googleMaps.Map(mapContainerRef.current, mapOptions);
      mapInstanceRef.current = map;
      infoWindowRef.current = new googleMaps.InfoWindow();

      // Draw all Real Hub Markers
      renderMapMarkers(map, googleMaps);

      // Draw all Real Corridor Polylines
      renderCorridorPolylines(map, googleMaps, activeCorridorId);
    } catch (err) {
      console.warn('Google Maps JS API init error, activating fallback:', err);
      setUseFallbackEmbed(true);
    }
  }, [currentCorridor, activeCorridorId, renderMapMarkers, renderCorridorPolylines]);

  // 1. Initialize Real Google Maps Platform via JS API
  useEffect(() => {
    let isCancelled = false;
    const win = typeof window !== 'undefined' ? (window as GoogleMapsWindow) : undefined;

    // Check if google maps script is already loaded
    if (win?.google?.maps) {
      initGoogleMap();
      return;
    }

    if (!apiKey) {
      return;
    }

    const scriptId = 'google-maps-platform-script';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=geometry`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (!isCancelled) {
          initGoogleMap();
        }
      };
      script.onerror = () => {
        if (!isCancelled) {
          setUseFallbackEmbed(true);
        }
      };
      document.head.appendChild(script);
    } else {
      existingScript.addEventListener('load', () => {
        if (!isCancelled) {
          initGoogleMap();
        }
      });
    }

    return () => {
      isCancelled = true;
    };
  }, [apiKey, initGoogleMap]);

  // Handle Corridor Change
  const handleCorridorSelect = (corridorId: string) => {
    setActiveCorridorId(corridorId);
    const selected = tradeCorridors.find((c) => c.id === corridorId);
    const win = typeof window !== 'undefined' ? (window as GoogleMapsWindow) : undefined;
    if (selected && mapInstanceRef.current && win?.google?.maps) {
      mapInstanceRef.current.panTo(selected.center);
      mapInstanceRef.current.setZoom(selected.zoom);
      renderCorridorPolylines(mapInstanceRef.current, win.google.maps, corridorId);
    }
  };


  // Fallback Google Maps iframe URL based on active corridor
  const fallbackEmbedUrl =
    activeCorridorId === 'europe'
      ? 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15735160.771239845!2d40.123456!3d35.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
      : activeCorridorId === 'middle-east'
      ? 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d8500000.771239845!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
      : activeCorridorId === 'americas'
      ? 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d20000000.771239845!2d-45.0!3d35.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin'
      : 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14000000.771239845!2d105.0!3d18.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin';

  return (
    <section className="py-14 sm:py-20 bg-[#07192D] text-white relative overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-[#0284C7]/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 mb-8 sm:mb-10">
          <ScrollReveal effect="fade-down" delay={0}>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 border border-sky-400/30 px-3.5 py-1 text-xs font-semibold text-sky-300 backdrop-blur-md shadow-sm">
              <Globe2 className="w-3.5 h-3.5 text-sky-400" />
              <span>Real Google Maps Platform Integration</span>
            </div>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={60}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Global Connectivity Across Active Trade Lanes
            </h2>
          </ScrollReveal>
          <ScrollReveal effect="fade-up" delay={120}>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-2xl mx-auto">
              Direct premier maritime carrier allocations and scheduled air freight paths linking Indian manufacturing clusters with 15+ global gateway ports. Explore the live Google Map below.
            </p>
          </ScrollReveal>
        </div>

        {/* Corridor Selection Pills */}
        <ScrollReveal effect="fade-up" delay={180} className="flex justify-center mb-6 sm:mb-7">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md shadow-xl">
            {tradeCorridors.map((corridor) => {
              const isSelected = activeCorridorId === corridor.id;
              return (
                <button
                  key={corridor.id}
                  onClick={() => handleCorridorSelect(corridor.id)}
                  className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#0284C7] text-white shadow-md shadow-sky-500/40 scale-[1.02]'
                      : 'text-neutral-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Navigation
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'text-sky-200 rotate-45' : 'text-sky-400'
                    }`}
                  />
                  <span>{corridor.name.split('↔')[1]?.trim() || corridor.name}</span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* ========================================================================= */}
        {/* REAL GOOGLE MAP CONTAINER CARD */}
        {/* ========================================================================= */}
        <ScrollReveal effect="scale-up" delay={240} duration={750}>
          <div className="rounded-3xl border-2 border-white/20 bg-[#F4F7FA] text-neutral-900 shadow-2xl overflow-hidden">
            {/* Google Maps Style Header Bar */}
            <div className="px-4 py-3 sm:px-5 sm:py-3.5 bg-white border-b border-neutral-200 flex flex-col md:flex-row md:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 text-[#0284C7] flex items-center justify-center shrink-0">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase font-bold text-sky-700">
                      LIVE GOOGLE MAP
                    </span>
                    <span className="text-neutral-300">•</span>
                    <span className="text-[10px] font-bold text-neutral-500">
                      15 Global Ports &amp; Hubs
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                    {currentCorridor.name}
                  </h3>
                </div>
              </div>

              {/* Transit Metrics Chips */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <div className="px-2.5 py-1 rounded-lg bg-sky-50 border border-sky-200/80 flex items-center gap-1.5">
                  <Ship className="w-3.5 h-3.5 text-sky-600" />
                  <span className="text-[10px] text-neutral-600 font-medium">Ocean:</span>
                  <strong className="text-sky-800 font-mono text-xs">{currentCorridor.oceanTransit}</strong>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center gap-1.5">
                  <Plane className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-[10px] text-neutral-600 font-medium">Air:</span>
                  <strong className="text-emerald-800 font-mono text-xs">{currentCorridor.airTransit}</strong>
                </div>

                <div className="px-2.5 py-1 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span className="text-[10px] text-neutral-600 font-medium">Terms:</span>
                  <strong className="text-amber-800 font-mono text-xs">{currentCorridor.incotermsCommon}</strong>
                </div>

                <a
                  href={currentCorridor.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 hover:bg-[#0284C7] text-white transition-colors flex items-center gap-1.5 text-[11px] font-bold shadow-xs cursor-pointer"
                  title="Open live Google Maps view for this trade corridor"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>

            {/* Google Maps Viewport Area */}
            <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[520px] bg-[#EBF3F8] overflow-hidden">
              {/* If Google Maps JS API loads container */}
              {!useFallbackEmbed ? (
                <div ref={mapContainerRef} className="w-full h-full" />
              ) : (
                /* Fallback Real Google Maps Embed with full pan & zoom */
                <iframe
                  title="SkyLink Global Trade Corridors Live Google Map"
                  src={fallbackEmbedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}

              {/* Floating Real-Time Port Markers Quick Tray (Overlay) */}
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto z-10 max-w-md pointer-events-auto">
                <div className="rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200/80 p-3 shadow-lg">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-neutral-500 mb-2 flex items-center justify-between">
                    <span className="flex items-center gap-1">
                      <Anchor className="w-3 h-3 text-[#0284C7]" />
                      Key Connected Ports &amp; Terminals
                    </span>
                    <span className="text-[9px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      Live Telemetry
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 max-h-24 overflow-y-auto pr-1">
                    {tradeHubLocations.map((hub) => (
                      <a
                        key={hub.id}
                        href={hub.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-1 rounded-lg border transition-all ${
                          hub.isOrigin
                            ? 'bg-rose-50 text-rose-800 border-rose-200 hover:bg-rose-100'
                            : hub.corridorId === activeCorridorId
                            ? 'bg-sky-50 text-sky-800 border-sky-300 hover:bg-sky-100 shadow-2xs'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                        }`}
                      >
                        <span>{hub.flag}</span>
                        <span>{hub.shortLabel}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Selected Corridor Details Footer Card */}
            <div className="p-4 sm:p-5 bg-white border-t border-neutral-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-8 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-800">
                    {currentCorridor.badge}
                  </span>
                  <span className="text-xs text-neutral-500 font-medium">
                    {currentCorridor.origin} &rarr; {currentCorridor.destination}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {currentCorridor.description}
                </p>
                <div className="text-[11px] text-neutral-500 font-medium">
                  <strong className="text-neutral-700">Terminal Gateways:</strong> {currentCorridor.keyPorts}
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2 justify-end">
                <a
                  href="/request-consultation"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white px-4 py-2 text-xs font-bold transition-all shadow-sm"
                >
                  <span>Book Corridor Capacity</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={currentCorridor.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-700 px-4 py-2 text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>View on Google Maps Platform</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
